import { Component, OnInit } from '@angular/core';

import { Exam } from './exam';

import { OlmService } from '../services/olm.service';

@Component({
	selector: 'exam-list',
	templateUrl: './exam-list.component.html',
})

export class ExamListComponent implements OnInit {
	auth: any;
	exams: Exam[];

	constructor(private olmService: OlmService) {};

	ngOnInit(): void {
		this.getExams();
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};

	getExams(): void {
		this.olmService.apiReadAll('exam').subscribe(response => this.exams = response);
	};
}