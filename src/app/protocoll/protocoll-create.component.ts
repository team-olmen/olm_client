import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Protocoll } from './protocoll';
import { ProtocollFormComponent } from './protocoll-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'protocoll-create',
	templateUrl: './protocoll-create.component.html',
})

export class ProtocollCreateComponent implements OnInit {
	id: number = -1;
	model: Protocoll = new Protocoll();
	submitLabel: string = 'Protokoll erschaffen';
	version: string = 'new';
	@ViewChild(ProtocollFormComponent) form: ProtocollFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) { }

	ngOnInit() {
		this.route.params
			.subscribe((params: Params) => {
				this.id = params['examid'];
			});
	}

	onSubmit() {
		this.model['exam'] = this.id;
		console.log(this.model);
		this.olmService.apiCreate('protocoll', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/protocolls/view', this.id]);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
