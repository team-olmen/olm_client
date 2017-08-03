import { Component, Input, Output, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Mcq } from './mcq';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

@Component({
	selector: 'mcq-form',
	templateUrl: './mcq-form.component.html',
})

export class McqFormComponent extends AbstractTemplateForm {
	@Input() model: Mcq;
	generationCats: any[];

	constructor(
		protected alertService: AlertService,
		private olmService: OlmService,
		private location: Location,
	) {
		super(alertService);
	};

	ngOnInit() {
		this.olmService.apiReadAll('generation')
			.subscribe(result => {
				this.generationCats = result;
				this.model.generation = this.model.generation ? this.model.generation : result[0].id;
			});
	}

	originalCats = [
		{'value': 1, 'label': 'Prüfungsfrage'},
		{'value': 0, 'label': 'selbst erstellt (und damit besser ;) )'},
	];

	formErrors = {
		'question': '',
	};

	validationMessages = {
		'question': {
			'required': 'Bitte gib eine Frage ein.',
		},
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
		(error === 'Question missing') && 
			(this.setError('question', 'required'));
		(error === 'Answers missing') && 
			(this.setError('global', 'Ich kann keine Antworten entdecken.'));
	};

	back() {
		this.location.back();
	};

	onSubmit() {
		this.model.raw = this.model.question + '\n';
		for(let i=0;i<this.model.answers.length;i++) {
			this.model.raw += (this.model.solution === i ? '* ' : '- ') + this.model.answers[i] + '\n';
		}
		this.parent.onSubmit();
	}

	addAnswer() {
		this.model.answers.push('');
	};

	removeAnswer(i: number) {
		this.model.answers.splice(i,1);
	};

	trackByIndex(index: any, item: any) {
		return index;
	};
}
