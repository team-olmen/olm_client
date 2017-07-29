import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';
import { Location } from '@angular/common';

import { User } from './user';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'user-form',
	templateUrl: './user-form.component.html',
})

export class UserFormComponent extends AbstractTemplateForm {
	@Input() model: User;
	public auth: any;
	public suggestedname: string = '';
	public suggestedpassword: string = '';
	public initialised: boolean = false;

	constructor(
		protected alertService: AlertService,
		protected olmService: OlmService,
		private location: Location,
	) {
		super(alertService);
	};

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};

	ngOnChanges() {
		if (this.model.id) {
			this.validationMessages.check.required = this.validationMessages.check.wrong;
			if (!this.initialised) {
				this.initialised = true;
				this.prepareSuggestions();
				this.model.check = '';
			}
		}
	};

	formErrors = {
		'username': '',
		'email': '',
		'roles': '',
		'password': '',
		'check': '',
		'repeat': '',
	};

	validationMessages = {
		'username': {
			'required': 'Bitte gib einen Benutzernamen ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
			'minlength': 'Der Name muss mindestend 5 Zeichen lang sein.',
			'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
			'exists': 'Es gibt schon einen Benutzer mit diesem Namen.',
		},
		'email': {
			'required': 'Bitte gib eine Email-Adresse ein.',
			'pattern': 'Die Adresse muss deine @charite.de-Adresse sein.',
			'minlength': 'Die Emailadresse muss mindestend 5 Zeichen lang sein.',
			'maxlength': 'Die Emailadresse darf maximal 100 Zeichen lang sein.',
			'exists': 'Es gibt schon einen Benutzer mit dieser Emailadresse. Hast Du Dein Passwort vergessen? Du kannst es zurücksetzen!',
		},
		'roles': {
			'required': 'Bitte ordne dem Nutzer eine Rolle zu.',
		},
		'password': {
			'required': 'Bitte gib ein Passwort ein.',
			'pattern': '...',
			'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
			'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
			'does-not-match': 'Die Passwörter stimmen nicht überein.',
		},
		'repeat': {
			'required': 'Bitte wiederhole das Passwort.',
			'pattern': '...',
			'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
			'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
			'does-not-match': 'Die Passwörter stimmen nicht überein.',
		},
		'check': {
			'required': 'Bitte gib dein derzeitiges Passwort ein.',
			'pattern': '...',
			'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
			'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
			'wrong': 'Bitte gib hier dein derzeitiges(!) Passwort ein',
		},
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
		(error === 'Invalid request') && 
			(this.setError('global', 'Der Server sagt, dass irgend etwas mit den Daten nicht stimmt.'));
		(error === 'Passwords do not match') && 
			(this.setError('password', 'does-not-match'));
		(error === 'Username exists') &&
			(this.setError('username', 'exists'));
		(error === 'Email exists') &&
			(this.setError('email', 'exists'));
		(error === 'Wrong password') &&
			(this.setError('check', 'wrong'));
	};

	back() {
		this.location.back();
	};

	prepareSuggestions() {
		//let s = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		//this.suggestedpassword = Array(6).join().split(',').map(function() { return s.charAt(Math.floor(Math.random() * s.length)); }).join('');
		this.suggestedname = this.model.username;
		this.suggestedpassword = 'olmen_' + this.suggestedname.substr(0,2);

		let index = this.model.username.indexOf('@charite.de');
		if (index !== -1) {
			this.suggestedname = this.model.username.substring(0, index);
		}
	}

	setSuggested() {
		this.model.username = this.suggestedname;
		this.model.password = this.suggestedpassword;
		this.model.repeat = this.suggestedpassword;
	};
}
