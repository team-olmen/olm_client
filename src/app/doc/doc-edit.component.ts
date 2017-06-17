import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Doc } from './doc';
import { DocFormComponent } from './doc-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'doc-edit',
	templateUrl: './doc-edit.component.html',
})

export class DocEditComponent implements OnInit {
	id: number = -1;
	version: string = 'current';
	model: Doc = new Doc();
	submitLabel: string = '';
	@ViewChild(DocFormComponent) form: DocFormComponent;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router,
	) { }

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => {
				this.id = params['id'];
				this.version = params['version'];
				if (this.version == 'current') {
					this.submitLabel = 'Änderungen speichern';
				} else {
					this.submitLabel = 'Stand wiederherstellen / übernehmen';
				}
				return this.olmService.apiRead('doc', params['id'], params['version']);
			})
			.subscribe(result => {
				this.model = result;
			});
	};
	
	onSubmit() {
		this.olmService.apiUpdate('doc', this.model.id, this.model)
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
