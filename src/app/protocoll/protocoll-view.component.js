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
import { Protocoll } from './protocoll';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var ProtocollViewComponent = (function () {
    function ProtocollViewComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.exam = -1;
        this.item = new Protocoll();
    }
    ProtocollViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('protocoll', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.item = result;
            _this.exam = result['exam'];
        });
    };
    return ProtocollViewComponent;
}());
ProtocollViewComponent = __decorate([
    Component({
        selector: 'protocoll-view',
        templateUrl: './protocoll-view.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router])
], ProtocollViewComponent);
export { ProtocollViewComponent };
//# sourceMappingURL=protocoll-view.component.js.map