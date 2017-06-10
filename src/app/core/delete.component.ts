import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'delete',
	templateUrl: './delete.component.html',
})

export class DeleteComponent implements OnInit {
	id: number = -1;
	type: string = '';
	version: string = '';
	item: string;

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
				this.version = params['version'];
				if (this.type == 'inactiveusers') {
					return this.olmService.apiReadUsersInactive();
				} else {
					return this.olmService.apiRead(params['type'], params['id'], params['version']);
				}
			})
			.subscribe(result => {
				if (this.type == 'mcq') {
					this.item = result.question;
				} else if (this.type == 'user') {
					this.item = result.username;
				} else if (this.type == 'inactiveusers') {
					this.item = String(result.length);
				} else if (result.name) {
					this.item = result.name;
				}
			});
	};

	delete() {
		if (this.type == 'inactiveusers') {
			this.olmService.apiDeleteUsersInactive()
				.subscribe(result => {
					this.alertService.success('Gelöscht.');
					this.location.back();
				});
		} else {
			this.olmService.apiDelete(this.type, this.id)
				.subscribe(result => {
					this.alertService.success('Gelöscht.');
					this.location.back();
				});
		}
	};

	back() {
		this.location.back();
	};
}
