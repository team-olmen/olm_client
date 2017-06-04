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
//import { Session } from './session';
//import { Module } from './module';
//import { Exam } from './exam';
import { OlmService } from '../services/olm.service';
var DashboardComponent = (function () {
    function DashboardComponent(olmService) {
        this.olmService = olmService;
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSessions();
        this.getModules();
        this.getExams();
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    ;
    DashboardComponent.prototype.getSessions = function () {
        var _this = this;
        this.olmService.apiReadAll('session').subscribe(function (response) { return _this.sessions = response; });
    };
    ;
    DashboardComponent.prototype.getModules = function () {
        var _this = this;
        this.olmService.apiReadAll('module').subscribe(function (response) { return _this.modules = response; });
    };
    ;
    DashboardComponent.prototype.getExams = function () {
        var _this = this;
        this.olmService.apiReadAll('exam').subscribe(function (response) { return _this.exams = response; });
    };
    ;
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Component({
        selector: 'dashboard',
        templateUrl: './dashboard.component.html',
    }),
    __metadata("design:paramtypes", [OlmService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map