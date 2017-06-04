var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Session } from './session';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var SessionViewComponent = (function () {
    function SessionViewComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.session = new Session();
    }
    SessionViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('session', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.session = _this.prepareSession(result);
            _this.loadQuestion();
        });
    };
    ;
    SessionViewComponent.prototype.next = function () {
        this.session.next();
        this.loadQuestion();
    };
    ;
    SessionViewComponent.prototype.previous = function () {
        this.session.previous();
        this.loadQuestion();
    };
    ;
    SessionViewComponent.prototype.prepareSession = function (raw) {
        raw = raw;
        var session = new Session();
        for (var i in raw) {
            session[i] = raw[i];
        }
        return session;
    };
    ;
    SessionViewComponent.prototype.loadQuestion = function () {
        var _this = this;
        this.olmService.apiRead('mcq', this.session.getMcqId(), 'current')
            .subscribe(function (result) {
            _this.mcq = result;
        }, function (error) {
            if (error === 'Item not found') {
                //this.session.removeCurrent();
                alert(_this.session.getMcqId());
                _this.next();
                _this.storeSession();
            }
        });
    };
    SessionViewComponent.prototype.storeSession = function () {
        var _this = this;
        this.olmService.apiUpdate('session', this.session.id, this.session)
            .subscribe(function (result) {
            _this.session = _this.prepareSession(result);
        }, function (error) {
            console.log(error);
        });
    };
    SessionViewComponent.prototype.select = function (answer) {
        this.session.finishQuestion(answer, this.mcq.solution === answer ? 1 : 0);
        this.storeSession();
    };
    ;
    return SessionViewComponent;
}());
SessionViewComponent = __decorate([
    Component({
        selector: 'session-view',
        templateUrl: './session-view.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router])
], SessionViewComponent);
export { SessionViewComponent };
//# sourceMappingURL=session-view.component.js.map