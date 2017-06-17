import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';
import { UserFormComponent } from './user-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'user-edit',
	templateUrl: './user-edit.component.html',
})

export class UserEditComponent implements OnInit {
	id: number = -1;
	model: User = new User();
	submitLabel = 'Änderungen speichern';
	@ViewChild(UserFormComponent) form: UserFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router,
		private location: Location,
	) { }

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => {
				this.id = params['id'];
				return this.olmService.apiRead('user', params['id'], 'current');
			})
			.subscribe(result => {
				this.model = result;
				this.model.password = '';
			});
	};

	onSubmit() {
		this.olmService.apiUpdate('user', this.model.id, this.model)
			.subscribe(
				result => {
					if (this.form.auth.admin) {
						this.alertService.success("Daten gespeichert.");
					} else
						this.router.navigate(['/door']);
						this.alertService.success("Daten gespeichert. Bitte logge Dich mit Deinen neuen Daten ein.");
					}
				},
				error => {
					this.form.handleServerError(error);
				});
	};

	back() {
		this.location.back();
	};
}
