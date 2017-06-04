var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Module } from './module';
import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
var ModuleFormComponent = (function (_super) {
    __extends(ModuleFormComponent, _super);
    function ModuleFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'name': '',
            'code': '',
        };
        _this.validationMessages = {
            'name': {
                'required': 'Bitte gib einen Namen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: -_',
                'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
                'exists': 'Ein Modul mit diesem Name gibt es schon.',
            },
            'code': {
                'required': 'Bitte den Modulcode ein.',
                'pattern': 'Module werden M.... benannt ;).',
                'minlength': 'Der Name muss mindestend 3 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 10 Zeichen lang sein.',
                'exists': 'Ein Modul mit diesem Code gibt es schon.',
            },
        };
        return _this;
    }
    ;
    ModuleFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Module exists') &&
            (this.setError('name', 'exists'));
        (error === 'Code exists') &&
            (this.setError('code', 'exists'));
    };
    ;
    ModuleFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return ModuleFormComponent;
}(AbstractTemplateForm));
__decorate([
    Input(),
    __metadata("design:type", Module)
], ModuleFormComponent.prototype, "model", void 0);
ModuleFormComponent = __decorate([
    Component({
        selector: 'module-form',
        templateUrl: './module-form.component.html',
    }),
    __metadata("design:paramtypes", [AlertService,
        Location])
], ModuleFormComponent);
export { ModuleFormComponent };
//# sourceMappingURL=module-form.component.js.map