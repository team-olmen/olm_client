import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Protocoll } from './protocoll';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'protocoll-view',
	templateUrl: './protocoll-view.component.html',
})

export class ProtocollViewComponent implements OnInit {
	id: number = -1;
	exam: number = -1;
	item: Protocoll = new Protocoll();
	auth: any;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
		this.route.params
			.switchMap((params: Params) => {
				this.id = params['id'];
				return this.olmService.apiRead('protocoll', params['id'], 'current');
			})
			.subscribe(result => {
				this.item = result;
				this.exam = result['exam'];
			});
	}
}
