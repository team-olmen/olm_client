import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'door',
	templateUrl: './door.component.html',
})

export class DoorComponent extends AbstractTemplateForm implements OnInit {
	returnUrl: string = '';

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		protected alertService: AlertService,
		private router: Router
	) {
		super(alertService);
	}

	ngOnInit() {
		this.olmService.logout();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
	}
	
	formErrors = {
		'username': '',
		'password': '',
	};

	validationMessages = {
		'username': {
			'required': 'Bitte gib deinen Benutzernamen ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: ',
			'bad-name-or-pw': 'Nutzername und / oder Passwort sind falsch.',
		},
		'password': {
			'pattern': '...',
			'required': 'Bitte gib dein Passwort ein.',
			'bad-name-or-pw': 'Nutzername und / oder Passwort sind falsch.',
		},
	};

	login() {
		this.olmService.login(this.model.username, this.model.password)
			.subscribe(
				auth => {
					console.log(auth);
					if (auth.enabled === 0) {
						this.router.navigate(['/user/edit', auth.id]);
						this.alertService.success("Herzlich Willkommen! Bitte ändere dein Passwort!");
					} else {
						this.router.navigate([this.returnUrl]);
						this.alertService.success("Herzlich Willkommen!");
					}

				},
				error => {
					this.handleServerError(error);
				}
			);
	};

	handleServerError(error: string) {
		(error === 'Bad username or password') && 
			(this.setError('username', 'bad-name-or-pw')) &&
			(this.setError('password', 'bad-name-or-pw'));
	};
}
