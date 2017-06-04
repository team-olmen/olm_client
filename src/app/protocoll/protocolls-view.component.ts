import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Protocoll } from './protocoll';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'protocolls-view',
	templateUrl: './protocolls-view.component.html',
})

export class ProtocollsViewComponent implements OnInit {
	id: number = -1;
	items: Protocoll[] = [];
	auth: any = {};

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
				this.id = params['examid'];
				return this.olmService.apiReadProtocolls(params['examid']);
			})
			.subscribe(result => {
				this.items = result;
			});
	}

	back() {
		this.location.back();
	};
}
