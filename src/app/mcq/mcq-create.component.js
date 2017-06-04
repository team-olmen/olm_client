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
import { Mcq } from './mcq';
import { McqFormComponent } from './mcq-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var McqCreateComponent = (function () {
    function McqCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.id = -1;
        this.model = new Mcq();
        this.submitLabel = 'Frage erschaffen';
        this.auth = {};
    }
    McqCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .subscribe(function (params) {
            _this.id = params['moduleid'];
        });
    };
    McqCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model['module'] = this.id;
        this.olmService.apiCreate('mcq', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/mcq/view', _this.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return McqCreateComponent;
}());
__decorate([
    ViewChild(McqFormComponent),
    __metadata("design:type", McqFormComponent)
], McqCreateComponent.prototype, "form", void 0);
McqCreateComponent = __decorate([
    Component({
        selector: 'mcq-create',
        templateUrl: './mcq-create.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router])
], McqCreateComponent);
export { McqCreateComponent };
//# sourceMappingURL=mcq-create.component.js.map