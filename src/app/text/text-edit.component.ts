import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Text } from './text';
import { TextFormComponent } from './text-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'text-edit',
	templateUrl: './text-edit.component.html',
})

export class TextEditComponent implements OnInit {
	id: number = -1;
	version: string = 'current';
	model: Text = new Text();
	submitLabel: string = 'Änderungen speichern';
	auth: any = {};
	@ViewChild(TextFormComponent) form: TextFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router,
		private location: Location,
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
		this.route.params
			.switchMap((params: Params) => {
				this.id = params['id'];
				return this.olmService.apiRead('text', params['id'], params['version']);
			})
			.subscribe(result => {
				this.model = result;
			});
	}

	onSubmit() {
		this.olmService.apiUpdate('text', this.model.id, this.model)
			.subscribe(
				result => {
					this.router.navigate(['/texts/view', result.exam]);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};

	back() {
		this.location.back();
	};
}
