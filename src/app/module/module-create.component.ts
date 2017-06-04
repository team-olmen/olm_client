import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Module } from './module';
import { ModuleFormComponent } from './module-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'module-create',
	templateUrl: './module-create.component.html',
})

export class ModuleCreateComponent {
	model: Module = new Module();
	submitLabel: string = 'Modul erschaffen';
	@ViewChild(ModuleFormComponent) form: ModuleFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) { }

	onSubmit() {
		this.olmService.apiCreate('module', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/dashboard']);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
