import { Component, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { Protocoll } from './protocoll';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';

@Component({
	selector: 'protocoll-form',
	templateUrl: './protocoll-form.component.html',
})

export class ProtocollFormComponent extends AbstractTemplateForm {
	@Input() model: Protocoll;

	constructor(
		protected alertService: AlertService,
		private location: Location,
	) {
		super(alertService);
	};
	
	formErrors = {
		'name': '',
		'text': '',
	};

	validationMessages = {
		'name': {
			'required': 'Bitte gib einen Namen ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
			'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
			'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
			'exists': 'Ein Prüfungsprotokoll mit diesem Namen gibt es schon.'
		},
		'text': {
			'required': 'Das wäre ein sinnloses Protokoll.',
		},
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
		(error === 'Protocoll exists') &&
			(this.setError('name', 'exists'));
	};

	back() {
		this.location.back();
	};
}
