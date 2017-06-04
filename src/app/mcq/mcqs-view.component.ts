import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Mcq } from './mcq';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'mcqs-view',
	templateUrl: './mcqs-view.component.html',
})

export class McqsViewComponent implements OnInit {
	module: number = -1;
	rating: number = -1;
	generation: string = 'all';
	original: number = 0;
	number: number = 0;
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
			.switchMap((params: Params) => {
				this.module = params['module'];
				this.rating = params['rating'];
				this.generation = params['generation'];
				this.original = params['original'];
				this.number = params['number'];
				return this.olmService.apiReadMcqs(
					this.module, this.rating, this.generation, this.original, this.number
				);
			})
			.subscribe(result => {
				this.items = result;
			});
	}
}
