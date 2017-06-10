import { Component, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { Exam } from './exam';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';

@Component({
	selector: 'exam-form',
	templateUrl: './exam-form.component.html',
})

export class ExamFormComponent extends AbstractTemplateForm {
	@Input() model: Exam;

	constructor(
		protected alertService: AlertService,
		private location: Location,
	) {
		super(alertService);
	};

	formErrors = {
		'name': '',
	};

	validationMessages = {
		'name': {
			'required': 'Bitte gib einen Namen ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
			'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
			'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
			'exists': 'Eine Prüfungsart mit diesem Namen gibt es schon.'
		},
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
		(error === 'Exam exists') &&
			(this.setError('name', 'exists'));
	};

	back() {
		this.location.back();
	};
}
