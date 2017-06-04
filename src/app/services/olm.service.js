var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Authorisation } from '../core/authorisation';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { CONFIG } from '../config/config';
var OlmService = (function () {
    function OlmService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.authObservable = new ReplaySubject(1);
        this.authState = new Authorisation();
        this.urlOlm = CONFIG.urlOlmApi;
        this.authObservable.subscribe(function (auth) { return _this.authState = auth; });
        var authStored = localStorage.getItem('auth');
        if (authStored) {
            var tmp = JSON.parse(authStored);
            this.authObservable.next(tmp);
        }
        else {
            var tmp = new Authorisation();
            this.authObservable.next(tmp);
        }
    }
    OlmService.prototype.getEndpoint = function (endpoint) {
        var fragment = '';
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
        }
        return fragment;
    };
    ;
    OlmService.prototype.canActivate = function (route, state) {
        if (this.authState.token != null) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/door'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    ;
    OlmService.prototype.handleError = function (error) {
        var errMsg;
        console.log(error);
        if (error instanceof Response) {
            if (error.status == 500) {
                console.error(error);
            }
            errMsg = error.statusText;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
            console.error(error);
        }
        return Observable.throw(errMsg);
    };
    ;
    OlmService.prototype.getAuth = function () {
        return this.authObservable;
    };
    ;
    OlmService.prototype.jwt = function () {
        // create authorization header with jwt token
        //console.log(this.authState.token);
        if (this.authState.token !== '') {
            var headers = new Headers({ 'X-Access-Token': 'Bearer ' + this.authState.token }); //, 'Authorization' : 'Bearer ' + this.authState.token });
            return new RequestOptions({ headers: headers });
        }
        return new RequestOptions();
    };
    ;
    OlmService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.urlOlm.concat('/api/login'), JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var tmp = response.json();
            var auth;
            if (tmp && tmp.token) {
                auth = tmp;
            }
            else {
                auth = new Authorisation();
            }
            localStorage.setItem('auth', JSON.stringify(auth));
            _this.authObservable.next(auth);
            return auth;
        })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('auth');
        this.authObservable.next(new Authorisation());
    };
    ;
    OlmService.prototype.resetPassword = function (email) {
        return this.http.post(this.urlOlm.concat('/api/password/reset'), JSON.stringify({ email: email }))
            .catch(this.handleError);
    };
    ;
    /*
     * default CRUD methods
     */
    OlmService.prototype.apiCreate = function (endpoint, data) {
        return this.http.post(this.urlOlm.concat(this.getEndpoint(endpoint)), data, this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiRead = function (endpoint, id, version) {
        var url;
        url = version == 'current' ?
            this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)) :
            this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id), '/version/', version);
        return this.http.get(url, this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiReadAll = function (endpoint) {
        return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiUpdate = function (endpoint, id, data) {
        return this.http.patch(this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)), data, this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiDelete = function (endpoint, id) {
        return this.http.delete(this.urlOlm.concat(this.getEndpoint(endpoint), '/', String(id)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiReadDeleted = function (endpoint) {
        return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint), '/deleted'), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiReadHistory = function (endpoint, id) {
        return this.http.get(this.urlOlm.concat(this.getEndpoint(endpoint), '/history/', String(id)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiReadProtocolls = function (id) {
        return this.http.get(this.urlOlm.concat(this.getEndpoint('protocoll'), '/exam/', String(id)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiReadMcqs = function (module, rating, generation, original, number) {
        return this.http.get(this.urlOlm.concat(this.getEndpoint('mcq'), '/modules/', String(module), '/rating/', String(rating), '/generation/', generation, '/original/', String(original), '/number/', String(number)), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    OlmService.prototype.apiReadText = function (path) {
        return this.http.get(this.urlOlm.concat(this.getEndpoint('text'), '/path/', path), this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    return OlmService;
}());
OlmService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Router])
], OlmService);
export { OlmService };
//# sourceMappingURL=olm.service.js.map