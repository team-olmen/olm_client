import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Session } from './session';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'session-view',
	templateUrl: './session-view.component.html',
})

export class SessionViewComponent implements OnInit {
	id: number = -1;
	session: Session = new Session();
	mcq: any;
	auth: any;

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
		this.route.params
			.switchMap((params: Params) => {
				this.id = params['id'];
				return this.olmService.apiRead('session', params['id'], 'current');
			})
			.subscribe(result => {
				this.session = this.prepareSession(result);
				this.loadQuestion();
			});
	};
	next(): void {
		this.session.next();
		this.loadQuestion();
	};

	previous(): void {
		this.session.previous();
		this.loadQuestion();
	};

	prepareSession(raw: Session): Session {
		raw = raw as Session;
		let session = new Session();
		for (let i in raw) {
			session[i] = raw[i];
		}
		return session;
	};

	loadQuestion(): void {
		this.olmService.apiRead('mcq', this.session.getMcqId(), 'current')
		.subscribe(
			result => {
				this.mcq = result;
			},
			error => {
				if (error === 'Item not found') {
					//this.session.removeCurrent();
					alert(this.session.getMcqId());
					this.next();
					this.storeSession();
				}
			},
		);
	}

	storeSession(): void {
		this.olmService.apiUpdate('session', this.session.id, this.session)
		.subscribe(
			result => {
				this.session = this.prepareSession(result);
			},
			error => {
				console.log(error);
			}
		);
	}

	select(answer: number): void {
		this.session.finishQuestion(
			answer,
			this.mcq.solution === answer ? 1 : 0
		);
		this.storeSession();
	};
}
