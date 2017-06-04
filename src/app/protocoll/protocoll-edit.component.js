var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Protocoll } from './protocoll';
import { ProtocollFormComponent } from './protocoll-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var ProtocollEditComponent = (function () {
    function ProtocollEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.version = 'current';
        this.model = new Protocoll();
        this.submitLabel = '';
        this.auth = {};
    }
    ProtocollEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            _this.version = params['version'];
            if (_this.version == 'current') {
                _this.submitLabel = 'Änderungen speichern';
            }
            else {
                _this.submitLabel = 'Stand wiederherstellen / übernehmen';
            }
            return _this.olmService.apiRead('protocoll', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ProtocollEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('protocoll', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/protocolls/view', result.exam]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    ProtocollEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ProtocollEditComponent;
}());
__decorate([
    ViewChild(ProtocollFormComponent),
    __metadata("design:type", ProtocollFormComponent)
], ProtocollEditComponent.prototype, "form", void 0);
ProtocollEditComponent = __decorate([
    Component({
        selector: 'protocoll-edit',
        templateUrl: './protocoll-edit.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], ProtocollEditComponent);
export { ProtocollEditComponent };
//# sourceMappingURL=protocoll-edit.component.js.map