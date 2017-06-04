import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'history',
	templateUrl: './history.component.html',
})

export class HistoryComponent implements OnInit {
	id: number = -1;
	type: string = '';
	items: any[] = [];

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
				this.type = params['type'];
				return this.olmService.apiReadHistory(params['type'], params['id']);
			})
			.subscribe(result => {
				this.items = result;
			});
	};

	back() {
		this.location.back();
	};
}
