import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';
import { UserFormComponent } from './user-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'user-create',
	templateUrl: './user-create.component.html',
})

export class UserCreateComponent {
	model: User = new User();
	submitLabel: string = 'Benutzer einladen';
	@ViewChild(UserFormComponent) form: UserFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) { }

	onSubmit() {
		this.olmService.apiCreate('user', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/user/edit', this.model.id]);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
