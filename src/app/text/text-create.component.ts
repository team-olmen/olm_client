import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Text } from './text';
import { TextFormComponent } from './text-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'text-create',
	templateUrl: './text-create.component.html',
})

export class TextCreateComponent implements OnInit {
	path: string = '';
	model: Text = new Text();
	submitLabel: string = 'Text / Hilfe anlegen';
	@ViewChild(TextFormComponent) form: TextFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) { }

	ngOnInit() {
		this.route.params
			.subscribe((params: Params) => {
				this.path = params['path'];
				if (this.path !== '') {
					this.model.path = this.path;
				}
			});
	}

	onSubmit() {
		this.olmService.apiCreate('text', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/texts/view', result.id]);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
