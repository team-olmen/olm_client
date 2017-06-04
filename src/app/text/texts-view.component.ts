import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Text } from './text';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'texts-view',
	templateUrl: './texts-view.component.html',
})

export class TextsViewComponent implements OnInit {
	id: number = -1;
	items: Text[] = [];
	auth: any = {};

	constructor(
		private olmService: OlmService,
		private alertService: AlertService,
		private location: Location,
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
		this.olmService.apiReadAll('text')
			.subscribe(result => {
				this.items = result;
			});
	}

	back() {
		this.location.back();
	};
}
