import { Component, OnInit } from '@angular/core';

import { Authorisation } from './authorisation';

import { OlmService } from '../services/olm.service';


@Component({
	selector: 'door-status',
	templateUrl: './door-status.component.html',
})

export class DoorStatusComponent implements OnInit {
	auth: Authorisation;

	constructor(
		private olmService: OlmService
	) {}

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	}
}
