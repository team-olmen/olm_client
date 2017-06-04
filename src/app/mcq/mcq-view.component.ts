import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Mcq } from './mcq';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'mcq-view',
	templateUrl: './mcq-view.component.html',
})

export class McqViewComponent implements OnInit {
	id: number = -1;
	item: Mcq = new Mcq();
	auth: any;
	discussion: boolean = true;

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
				return this.olmService.apiRead('mcq', params['id'], 'current');
			})
			.subscribe(result => {
				this.item = result;
			});
	};

	back() {
		this.location.back();
	};
}
