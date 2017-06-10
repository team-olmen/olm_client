import { Component, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { Text } from './text';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';

@Component({
	selector: 'text-form',
	templateUrl: './text-form.component.html',
})

export class TextFormComponent extends AbstractTemplateForm {
	@Input() model: Text;

	constructor(
		protected alertService: AlertService,
		private location: Location,
	) {
		super(alertService);
	};
	
	formErrors = {
		'path': '',
		'text': '',
		'help': '',
	};

	validationMessages = {
		'path': {
			'required': 'Bitte gib einen Pfad ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
		},
		'text': {
		},
		'help': {
		},
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
	};

	back() {
		this.location.back();
	};
}
