import { Component, OnInit } from '@angular/core';

import { Session } from './session';

import { OlmService } from '../services/olm.service';

@Component({
	selector: 'session-list',
	templateUrl: './session-list.component.html',
})

export class SessionListComponent implements OnInit {
	auth: any;
	sessions: Session[];

	constructor(private olmService: OlmService) {};

	ngOnInit(): void {
		this.getSessions();
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};

	getSessions(): void {
		this.olmService.apiReadAll('session').subscribe(response => this.sessions = response);
	};
}
