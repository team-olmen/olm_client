import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Protocoll } from './protocoll';
import { ProtocollFormComponent } from './protocoll-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'protocoll-edit',
	templateUrl: './protocoll-edit.component.html',
})

export class ProtocollEditComponent implements OnInit {
	id: number = -1;
	version: string = 'current';
	model: Protocoll = new Protocoll();
	submitLabel: string = '';
	auth: any = {};
	@ViewChild(ProtocollFormComponent) form: ProtocollFormComponent;

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
				this.version = params['version'];
				if (this.version == 'current') {
					this.submitLabel = 'Änderungen speichern';
				} else {
					this.submitLabel = 'Stand wiederherstellen / übernehmen';
				}
				return this.olmService.apiRead('protocoll', params['id'], params['version']);
			})
			.subscribe(result => {
				this.model = result;
			});
	}

	onSubmit() {
		this.olmService.apiUpdate('protocoll', this.model.id, this.model)
			.subscribe(
				result => {
					this.router.navigate(['/protocolls/view', result.exam]);
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
