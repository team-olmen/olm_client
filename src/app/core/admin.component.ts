import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Doc } from '../doc/doc';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
})

export class AdminComponent implements OnInit {
	items: Doc[] = [];
	auth: any = {};

	constructor(
		private olmService: OlmService,
		private alertService: AlertService,
		private location: Location,
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
		this.olmService.apiReadAll('doc')
			.subscribe(result => {
				this.items = result;
			});
	}

	back() {
		this.location.back();
	};
}
