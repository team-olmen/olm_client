import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'users-view',
	templateUrl: './users-view.component.html',
})

export class UsersViewComponent implements OnInit {
	items: User[] = [];
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
				return this.olmService.apiReadAll('user');
			})
			.subscribe(result => {
				this.items = result;
			});
	}

	back() {
		this.location.back();
	};
}
