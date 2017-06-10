import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'session-create',
	templateUrl: './session-create.component.html',
})

export class SessionCreateComponent extends AbstractTemplateForm implements OnInit {
	model: any = {
		'name': '',
		'modules': [],
		'rating': 3,
		'generation': 'all',
		'original': 2,
		'number': 0,
	};
	generationCats: any[];

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		protected alertService: AlertService,
		private router: Router,
		private locattion: Location,
	) {
		super(alertService)
	}

	ngOnInit() {
		this.olmService.apiReadAll('module')
			.subscribe(result => {
				this.moduleList = result;
			});
		this.olmService.apiReadAll('generation')
			.subscribe(result => {
				this.generationCats = [];
				this.generationCats.push({'id': 'all', 'name': 'alle'});
				for (let i in result) {
					this.generationCats.push(result[i]);
				}
			});
	}
	
	formErrors = {
		'name' : '',
		'modules': '',
		'rating': '',
		'generation': '',
		'original': '',
		'number' : '',
	};

	validationMessages = {
		'name': {
			'required': 'Bitte gib einen Namen ein.',
			'pattern': 'Der Name darf nur aus Buchstaben, Zahlen, Leerzeichen und folgenden Sonderzeichen bestehen: "_", "-", ".", ":", ","',
			'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
			'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
		},
		'modules': {
			'min': 'Ein bisschen mehr dürfte es schon sein.',
			'max': 'Hui! Sehr motiviert. 200 Fragen sind die Tagesration beim STEX ;) .',
			'too-many-modules': 'Bitte nicht mehr als 4 Module auswählen.'
		},
	};

	onSubmit() {
		this.olmService.apiCreate('session', this.model)
			.subscribe(
				result => {
					this.router.navigate(['/session/view', result.id]);
					this.alertService.success("Daten gespeichert.");
				},
				error => {
					this.handleServerError(error);
				});
	};

	handleServerError(error: string) {
		(error === 'Item not changed') && 
			(this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
		(error === 'Too many modules') && 
			(this.setError('modules', 'too-many-modules'));
		(error === 'No questions') && 
			(this.setError('global', 'Nach dem wir filterten waren keine Daten mehr da... Bitte filtere weniger streng ;)'));
	}

	numberCats = [
		{'value' : 0, 'label': 'alle'},
		{'value' : 10, 'label': '10'},
		{'value' : 20, 'label': '20'},
		{'value' : 50, 'label': '50'},
		{'value' : 100, 'label': '100'},
		{'value' : 200, 'label': '200'},
	];

	ratingCats = [
		{'value' : 3, 'label': 'alle'},
		{'value' : 1, 'label': 'nur gute Fragen'},
		{'value' : 0, 'label': 'nur schlechte Fragen (Prüfung? ;)'},
	];

	originalCats = [
		{'value' : 2, 'label': 'alle'},
		{'value' : 1, 'label': 'nur als "Original" Prüfungsfrage markierte'},
		{'value' : 0, 'label': 'keine als solche markierte Frage'},
	];

	moduleList: any[] = [];
}
