import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Exam } from './exam';
import { ExamFormComponent } from './exam-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'exam-create',
	templateUrl: './exam-create.component.html',
})

export class ExamCreateComponent {
	model: Exam = new Exam();
	submitLabel: string = 'Prüfungsart erschaffen';
	@ViewChild(ExamFormComponent) form: ExamFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) {
	}

	onSubmit() {
		this.olmService.apiCreate('exam', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/dashboard']);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
