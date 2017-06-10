import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Mcq } from './mcq';
import { McqFormComponent } from './mcq-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'mcq-create',
	templateUrl: './mcq-create.component.html',
})

export class McqCreateComponent implements OnInit {
	id: number = -1;
	model: Mcq = new Mcq();
	submitLabel: string = 'Frage erschaffen';
	auth: any = {};
	version: string = 'new';
	@ViewChild(McqFormComponent) form: McqFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
		this.route.params
			.subscribe((params: Params) => {
				this.id = params['moduleid'];
			});
	}

	onSubmit() {
		this.model['module'] = this.id;
		this.olmService.apiCreate('mcq', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/mcq/view', this.id]);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
