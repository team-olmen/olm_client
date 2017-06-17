import { Component, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { Doc } from './doc';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';

@Component({
	selector: 'doc-form',
	templateUrl: './doc-form.component.html',
})

export class DocFormComponent extends AbstractTemplateForm {
	@Input() model: Doc;

	constructor(
		protected alertService: AlertService,
		private location: Location,
	) {
		super(alertService);
	};

	formErrors = {
		'title': '',
		'text': '',
	};

	validationMessages = {
		'title': {
			'required': 'Bitte gib einen Namen ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
			'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
			'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
			'exists': 'Eine Protokollsammlung mit diesem Namen gibt es schon.'
		},
		'text': {
			'required': 'Das wäre sinnlos ;)',
		}
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
	};

	back() {
		this.location.back();
	};
}
