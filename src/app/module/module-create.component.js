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
import { Module } from './module';
import { ModuleFormComponent } from './module-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var ModuleCreateComponent = (function () {
    function ModuleCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.model = new Module();
        this.submitLabel = 'Modul erschaffen';
    }
    ModuleCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('module', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return ModuleCreateComponent;
}());
__decorate([
    ViewChild(ModuleFormComponent),
    __metadata("design:type", ModuleFormComponent)
], ModuleCreateComponent.prototype, "form", void 0);
ModuleCreateComponent = __decorate([
    Component({
        selector: 'module-create',
        templateUrl: './module-create.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router])
], ModuleCreateComponent);
export { ModuleCreateComponent };
//# sourceMappingURL=module-create.component.js.map