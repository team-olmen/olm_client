import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'deleted',
	templateUrl: './deleted.component.html',
})

export class DeletedComponent implements OnInit {
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
				this.type = params['type'];
				return this.olmService.apiReadDeleted(params['type']);
			})
			.subscribe(result => {
				this.items = result;
			});
	};

	back() {
		this.location.back();
	};
}
