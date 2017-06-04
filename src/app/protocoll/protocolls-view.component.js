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
var ProtocollsViewComponent = (function () {
    function ProtocollsViewComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.items = [];
        this.auth = {};
    }
    ProtocollsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['examid'];
            return _this.olmService.apiReadProtocolls(params['examid']);
        })
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    ProtocollsViewComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ProtocollsViewComponent;
}());
ProtocollsViewComponent = __decorate([
    Component({
        selector: 'protocolls-view',
        templateUrl: './protocolls-view.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], ProtocollsViewComponent);
export { ProtocollsViewComponent };
//# sourceMappingURL=protocolls-view.component.js.map