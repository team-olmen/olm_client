import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Module } from './module';
import { ModuleFormComponent } from './module-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'module-edit',
	templateUrl: './module-edit.component.html',
})

export class ModuleEditComponent implements OnInit {
	id: number = -1;
	version: string = 'current';
	model: Module = new Module();
	submitLabel: string = '';
	@ViewChild(ModuleFormComponent) form: ModuleFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router,
		private location: Location,
	) { }

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => {
				this.id = params['id'];
				this.version = params['version'];
				if (this.version == 'current') {
					this.submitLabel = 'Änderungen speichern';
				} else {
					this.submitLabel = 'Stand wiederherstellen / übernehmen';
				}
				return this.olmService.apiRead('module', params['id'], params['version']);
			})
			.subscribe(result => {
				this.model = result;
			});
	}
	

	onSubmit() {
		this.olmService.apiUpdate('module', this.model.id, this.model)
			.subscribe(
				result => {
					this.router.navigate(['/dashboard']);
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
