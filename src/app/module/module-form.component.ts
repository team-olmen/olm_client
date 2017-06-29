import { Component, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

import { Module } from './module';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';

@Component({
	selector: 'module-form',
	templateUrl: './module-form.component.html',
})

export class ModuleFormComponent extends AbstractTemplateForm {
	@Input() model: Module;

	constructor(
		protected alertService: AlertService,
		private location: Location,
	) {
		super(alertService);
	};

	formErrors = {
		'name': '',
		'code': '',
	};

	validationMessages = {
		'name': {
			'required': 'Bitte gib einen Namen ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
			'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
			'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
			'exists': 'Eine MC-Sammlung mit diesem Name gibt es schon.',
		},
		'code': {
			'required': 'Bitte gib eine Kurzform für die MC-Sammlung ein, z.B. "M02".',
			'pattern': 'MC-Sammlungscodes beginnen mit einem Buchstaben und werden gefolgt von Zahlen, z.B. M01, S02, ... .',
			'minlength': 'Der Code muss mindestend 2 Zeichen lang sein.',
			'maxlength': 'Der Code darf maximal 10 Zeichen lang sein.',
			'exists': 'Eine MC-Sammlung mit diesem Code gibt es schon.',
		},
		'order_num': {
			'required': 'Gib an, wo das Item in der Reihenfolge stehen soll',
		},
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
		(error === 'Module exists') &&
			(this.setError('name', 'exists'));
		(error === 'Code exists') &&
			(this.setError('code', 'exists'));
	};

	back() {
		this.location.back();
	};
}
