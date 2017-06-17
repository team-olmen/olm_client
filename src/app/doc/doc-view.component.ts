import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Doc } from './doc';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'doc-view',
	templateUrl: './doc-view.component.html',
})

export class DocViewComponent implements OnInit {
	id: number = -1;
	item: Doc = new Doc();
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
				return this.olmService.apiRead('doc', params['id'], 'current');
			})
			.subscribe(result => {
				this.item = result;
			});
	}
}
