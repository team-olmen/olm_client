import { Component, OnInit } from '@angular/core';

import { OlmService } from '../services/olm.service';

@Component({
  selector: 'dashboard',
	templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
	auth: any;

	constructor(private olmService: OlmService) {};

	ngOnInit(): void {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};
}
