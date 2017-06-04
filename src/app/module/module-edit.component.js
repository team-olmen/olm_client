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
import { Module } from './module';
import { ModuleFormComponent } from './module-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var ModuleEditComponent = (function () {
    function ModuleEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.version = 'current';
        this.model = new Module();
        this.submitLabel = '';
    }
    ModuleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            return _this.olmService.apiRead('module', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ModuleEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('module', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    ModuleEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ModuleEditComponent;
}());
__decorate([
    ViewChild(ModuleFormComponent),
    __metadata("design:type", ModuleFormComponent)
], ModuleEditComponent.prototype, "form", void 0);
ModuleEditComponent = __decorate([
    Component({
        selector: 'module-edit',
        templateUrl: './module-edit.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], ModuleEditComponent);
export { ModuleEditComponent };
//# sourceMappingURL=module-edit.component.js.map