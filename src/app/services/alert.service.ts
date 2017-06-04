import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AlertService {
	private subject = new ReplaySubject<any>(1);
	private keepAfterNavigationChange = false;

	constructor(private router: Router) {
		// clear alert message on route change
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				if (this.keepAfterNavigationChange) {
					// only keep for a single location change
					this.keepAfterNavigationChange = false;
				} else {
					// clear alert
					this.subject.next(null);
				}
			}
		});
	}

	success(message: string, keepAfterNavigationChange = false) {
		this.keepAfterNavigationChange = keepAfterNavigationChange;
		this.subject.next({ type: 'success', text: message });
	}

	error(message: string, keepAfterNavigationChange = false) {
		this.keepAfterNavigationChange = keepAfterNavigationChange;
		this.subject.next({ type: 'error', text: message });
	}

	getMessage(): ReplaySubject<any> {
		return this.subject;
	}
}
