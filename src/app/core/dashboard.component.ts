import { Component, OnInit } from '@angular/core';

//import { Session } from './session';
//import { Module } from './module';
//import { Exam } from './exam';

import { OlmService } from '../services/olm.service';

@Component({
  selector: 'dashboard',
	templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
	//currentUser: any;
	//sessions: Session[];
	//modules: Module[];
	//exams: Exam[];

	auth: any;
	sessions: any[];
	modules: any[];
	exams: any[];

	constructor(private olmService: OlmService) {};

	ngOnInit(): void {
		this.getSessions();
		this.getModules();
		this.getExams();
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};

	getSessions(): void {
		this.olmService.apiReadAll('session').subscribe(response => this.sessions = response);
	};

	getModules(): void {
		this.olmService.apiReadAll('module').subscribe(response => this.modules = response);
	};

	getExams(): void {
		this.olmService.apiReadAll('exam').subscribe(response => this.exams = response);
	};
}
