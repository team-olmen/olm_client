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
import { Protocoll } from './protocoll';
import { ProtocollFormComponent } from './protocoll-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var ProtocollCreateComponent = (function () {
    function ProtocollCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.model = new Protocoll();
        this.submitLabel = 'Protokoll erschaffen';
    }
    ProtocollCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['examid'];
        });
    };
    ProtocollCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model['exam'] = this.id;
        console.log(this.model);
        this.olmService.apiCreate('protocoll', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/protocolls/view', _this.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return ProtocollCreateComponent;
}());
__decorate([
    ViewChild(ProtocollFormComponent),
    __metadata("design:type", ProtocollFormComponent)
], ProtocollCreateComponent.prototype, "form", void 0);
ProtocollCreateComponent = __decorate([
    Component({
        selector: 'protocoll-create',
        templateUrl: './protocoll-create.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router])
], ProtocollCreateComponent);
export { ProtocollCreateComponent };
//# sourceMappingURL=protocoll-create.component.js.map