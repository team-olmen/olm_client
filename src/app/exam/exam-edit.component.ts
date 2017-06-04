import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Exam } from './exam';
import { ExamFormComponent } from './exam-form.component';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'exam-edit',
	templateUrl: './exam-edit.component.html',
})

export class ExamEditComponent implements OnInit {
	id: number = -1;
	version: string = 'current';
	model: Exam = new Exam();
	submitLabel: string = '';
	@ViewChild(ExamFormComponent) form: ExamFormComponent;

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
				return this.olmService.apiRead('exam', params['id'], params['version']);
			})
			.subscribe(result => {
				this.model = result;
			});
	};
	
	onSubmit() {
		this.olmService.apiUpdate('exam', this.model.id, this.model)
			.subscribe(
				result => {
					this.router.navigate(['/dashboard']);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.form.handleServerError(error);
				});
	};
}
