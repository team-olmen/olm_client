import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'door-reset',
	templateUrl: './door-reset.component.html',
})

export class DoorResetComponent extends AbstractTemplateForm implements OnInit {
	returnUrl: string = '';

	constructor(
		private olmService: OlmService,
		protected alertService: AlertService,
	) {
		super(alertService);
	}

	ngOnInit() {
	}
	
	formErrors = {
		'email': '',
	};

	validationMessages = {
		'email': {
			'required': 'Bitte gib deine Emailadresse ein.',
			'pattern': 'Bitte gib eine gültige Emailadresse ein',
		},
	};

	reset() {
		this.olmService.resetPassword(this.model.email)
			.subscribe(
				result => {
						this.alertService.success("Sollte ein Account zu dieser Emailadresse existieren, wurde eine Email mit dem zurückgesetzten Passwort versandt. Bitte kontrollier auch den Spam-Ordner!");
				},
			);
	};
}
