import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import { CutPipe } from '../shared/cut.pipe';
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
	item: any = {};

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
				return this.olmService.apiRead(params['type'], params['id'], 'current');
			})
			.subscribe(result => {
				if (result.name || result.question) {
					this.item = result;
				} else {
					this.item = {name: "GELÖSCHT", question: "GELÖSCHT"};
				}
			});
	};

	delete() {
		console.log(this.type + ' ' + this.id );
		this.olmService.apiDelete(this.type, this.id)
			.subscribe(result => {
				this.location.back();
			});
	};

	back() {
		this.location.back();
	};
}
