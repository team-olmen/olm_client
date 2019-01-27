import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Mcq } from './mcq';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';
import { Module } from '../module/module';

@Component({
	selector: 'mcqs-view',
	templateUrl: './mcqs-view.component.html',
})

export class McqsViewComponent implements OnInit {
	module: Module = new Module;
	items: Mcq[] = [];
	auth: any = {};
	discussion: boolean = false;

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
			.switchMap((params: Params) => this.olmService.apiReadMcqs(
				params['module'], params['rating'], params['generation'], params['original'], params['number']
			))
			.subscribe((result: Mcq[]) => {
				this.items = result;
			});
		this.route.params
			.switchMap((params: Params) => this.olmService.apiRead('module', params['module'], 'current'))
			.subscribe((result: Module) => {
				this.module = result;
			});
	}
}
