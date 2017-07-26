import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Authorisation } from '../core/authorisation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { CONFIG } from '../config/config';
import { CONFIG_TEST } from '../config/config';
import { API } from '../config/config';

@Injectable()
export class OlmService implements CanActivate {

	private authObservable: ReplaySubject<Authorisation> = new ReplaySubject(1);
	private authState: Authorisation = new Authorisation();

	private config = (API == 'prod') ? (CONFIG) : (CONFIG_TEST);
	private urlOlm = this.config.urlOlmApi;
	private getEndpoint(endpoint: string): string {
		let fragment: string = '';
		switch (endpoint) {
			case 'user': {
				fragment = '/api/users';
				break;
			}
			case 'session': {
				fragment = '/api/sessions';
				break;
			}
			case 'module': {
				fragment = '/api/modules';
				break;
			}
			case 'mcq': {
				fragment = '/api/mcqs';
				break;
			}
			case 'exam': {
				fragment = '/api/exams';
				break;
			}
			case 'protocoll': {
				fragment = '/api/protocolls';
				break;
			}
			case 'generation': {
				fragment = '/api/generations';
				break;
			}
			case 'text': {
				fragment = '/api/texts';
				break;
			}
			case 'doc': {
				fragment = '/api/docs';
				break;
			}
		}
		return fragment;
	}

	public constructor(private http: Http, private router: Router) {
		this.authObservable.subscribe(auth => this.authState = auth);

		let authStored = localStorage.getItem('auth');
		if (authStored)  {
			let tmp = JSON.parse(authStored);
			this.authObservable.next(tmp);
		} else {
			let tmp = new Authorisation();
			this.authObservable.next(tmp);
		}
	};

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.authState.token != null) {
			// logged in so return true
			return true;
		}

		// not logged in so redirect to login page with the return url
		this.router.navigate(['/door'], { queryParams: { returnUrl: state.url }});
		return false;
	};

	private handleError(service: OlmService, error: any): Observable<any> {
		let errMsg: string;
		if (error instanceof Response) {
			if (error.status == 401) {
				//service.logout();
				console.log("Invalid token, I will log you out");
				service.router.navigate(['/door']);
			}
			errMsg = error.statusText;
		} else {
			errMsg = error.message ? error.message : error.toString();
			console.error(error);
		}
		return Observable.throw(errMsg);
	};

	public getAuth(): ReplaySubject<Authorisation> {
		return this.authObservable;
	};

	private jwt(): RequestOptions {
		// create authorization header with jwt token
		//console.log(this.authState.token);
		if (this.authState.token !== '') {
			let headers = new Headers({ 'X-Access-Token': 'Bearer ' + this.authState.token });//, 'Authorization' : 'Bearer ' + this.authState.token });
			return new RequestOptions({ headers: headers });
		}
		return new RequestOptions();
	};

	login(username: string, password: string): Observable<Authorisation> {
		return this.http.post(this.urlOlm.concat('/api/login'), JSON.stringify({ username: username, password: password }))
		.map((response: Response) => {
			// login successful if there's a jwt token in the response
			let tmp = response.json();
			let auth: Authorisation;
			if (tmp && tmp.token) {
				auth = tmp as Authorisation;
			} else {
				auth = new Authorisation();
			}
			localStorage.setItem('auth', JSON.stringify(auth));
			this.authObservable.next(auth);
			return auth;
		})
		//.catch(this.handleError);
		.catch(error => this.handleError(this, error));
	};

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('auth');
		this.authObservable.next(new Authorisation());
	};

	resetPassword(email: string): Observable<Authorisation> {
		return this.http.post(this.urlOlm.concat('/api/password/reset'), JSON.stringify({ email: email }))
		//.catch(this.handleError);
		.catch(error => this.handleError(this, error));
	};

	/*
	 * default CRUD methods
	 */

	apiCreate(endpoint: string, data: any): Observable<any> {
		return this.http.post(this.urlOlm.concat(this.getEndpoint(endpoint)), data, this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiRead(endpoint: string, id: number, version: string): Observable<any> {
		let url: string;
		url = version == 'current' ?
			this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)) :
			this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id), '/version/', version);
		return this.http.get(url, this.jwt())
			.map(response => response.json())
			//.catch(this.handleError);
			.catch(error => this.handleError(this, error));
	};

	apiReadAll(endpoint: string): Observable<any[]> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint)), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiUpdate(endpoint: string, id: number, data: any): Observable<any> {
		return this.http.patch(this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)), data, this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiDelete(endpoint: string, id: number): Observable<any> {
		return this.http.delete(this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiReadDeleted(endpoint: string): Observable<any[]> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint), '/deleted'), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiReadHistory(endpoint: string, id: number): Observable<any[]> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint), '/history/', String(id)), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiReadProtocolls(id: number): Observable<any[]> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint('protocoll'), '/exam/', String(id)), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);
		.catch(error => this.handleError(this, error));
	};

	apiReadMcqs(module: number, rating: number, generation: string, original: number, number: number): Observable<any[]> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint('mcq'),
			'/modules/', String(module),
			'/rating/', String(rating),
			'/generation/', generation,
			'/original/', String(original),
			'/number/', String(number)),
			this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);
		.catch(error => this.handleError(this, error));
	};

	apiReadText(path: string): Observable<any> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint('text'), '/path/', path), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiReadUsersBySearchTerm(term: string): Observable<any[]> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint('user'), '/search/', term), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};

	apiReadUsersInactive(): Observable<any[]> {
		return this.http.get(this.urlOlm.concat(this.getEndpoint('user'), '/inactive'), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};
	apiDeleteUsersInactive(): Observable<any[]> {
		return this.http.delete(this.urlOlm.concat(this.getEndpoint('user'), '/inactive'), this.jwt())
		.map(response => response.json())
		//.catch(this.handleError);	
		.catch(error => this.handleError(this, error));
	};
}
