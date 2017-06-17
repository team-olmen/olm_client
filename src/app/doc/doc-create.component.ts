import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Doc } from './doc';
import { DocFormComponent } from './doc-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'doc-create',
	templateUrl: './doc-create.component.html',
})

export class DocCreateComponent {
	model: Doc = new Doc();
	submitLabel: string = 'Doku erschaffen';
	version: string = 'new';
	@ViewChild(DocFormComponent) form: DocFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) {
	}

	onSubmit() {
		this.olmService.apiCreate('doc', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/admin']);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
