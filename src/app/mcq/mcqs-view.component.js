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
import { Location } from '@angular/common';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var McqsViewComponent = (function () {
    function McqsViewComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.module = -1;
        this.rating = -1;
        this.generation = 'all';
        this.original = 0;
        this.number = 0;
        this.items = [];
        this.auth = {};
        this.discussion = false;
    }
    McqsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.module = params['module'];
            _this.rating = params['rating'];
            _this.generation = params['generation'];
            _this.original = params['original'];
            _this.number = params['number'];
            return _this.olmService.apiReadMcqs(_this.module, _this.rating, _this.generation, _this.original, _this.number);
        })
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    return McqsViewComponent;
}());
McqsViewComponent = __decorate([
    Component({
        selector: 'mcqs-view',
        templateUrl: './mcqs-view.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], McqsViewComponent);
export { McqsViewComponent };
//# sourceMappingURL=mcqs-view.component.js.map