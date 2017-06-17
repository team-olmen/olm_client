import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './user';

import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'users-view',
	templateUrl: './users-view.component.html',
})

export class UsersViewComponent implements OnInit {
	items: Observable<User[]>;
	auth: any = {};
	searchTerm = new Subject<string>();

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private alertService: AlertService,
		private router: Router,
		private location: Location,
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
		this.items = this.searchTerm
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => {
				return term
					? this.getResults(term)
					: Observable.of<User[]>([]);
			});
	}

	back() {
		this.location.back();
	};

	search(term: string) {
		this.searchTerm.next(term);
	};

	getResults(term: string): Observable<User[]> {
		if (term.length <= 3) {
			return Observable.of<User[]>([]);
		};
		return this.olmService.apiReadUsersBySearchTerm(term);
	};
}
