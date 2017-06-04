import { Component, Input, AfterViewChecked, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Mcq } from './mcq';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'mcq-display',
	templateUrl: './mcq-display.component.html',
})

export class McqDisplayComponent implements OnInit {
	form: NgForm;
	model: any = {};
	auth: any = {admin: 0};
	@Input() item: Mcq;
	@Input() discussion: boolean;
	@ViewChild('form') currentForm: NgForm;

	constructor(
		private olmService: OlmService,
		private alertService: AlertService,
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => {
			this.auth = auth;
		});
	};

	ngOnChanges() {
		if (this.auth.admin) {
			this.model.discussion = this.item.discussion;
		} else {
			this.model.discussion = '';
		}
	};
	
	ngAfterViewChecked() {
  	this.formChanged();
	};

	formChanged() {
		if (this.currentForm === this.form) { return; }
		this.form = this.currentForm;
		if (this.form) {
			this.form.valueChanges
				.subscribe(data => this.onValueChanged(data));
		}
	};

	onValueChanged(data?: any) {
		if (!this.form) { return; }
		const form = this.form.form;

		for (const field in this.formErrors) {
			// clear previous error message (if any)
			this.formErrors[field] = '';
			const control = form.get(field);

			if (control && control.dirty && !control.valid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	};
	
	formErrors = {
		'discussion': '',
	};

	validationMessages = {
		'discussion': {
		},
	};

	onSubmit() {
		let discussion: string = '';
		if (this.auth.admin) {
			discussion = this.model.discussion;
		} else {
			discussion = this.item.discussion.concat("\n\n**", this.auth.name, "**:\n", this.model.discussion);
		}
		this.olmService.apiUpdate(
			'mcq',
			this.item.id,
			{
				id: this.item.id,
				discussion: discussion,
			})
			.subscribe(result => {
				this.item.discussion = result.discussion;
				if (this.auth.admin) {
					this.model.discussion = result.discussion;
				} else {
					this.model.discussion = '';
				}
			});
	};

	rate(rating: number) {
		this.olmService.apiUpdate(
			'mcq',
			this.item.id,
			{
				id: this.item.id,
				rated: rating,
			})
			.subscribe(result => {
				this.item.rating = result.rating;
			});
	};
}
