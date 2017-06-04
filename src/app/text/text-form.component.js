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
import { Text } from './text';
import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
var TextFormComponent = (function (_super) {
    __extends(TextFormComponent, _super);
    function TextFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'path': '',
            'text': '',
            'help': '',
        };
        _this.validationMessages = {
            'path': {
                'required': 'Bitte gib einen Pfad ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: -_',
            },
            'text': {},
            'help': {},
        };
        return _this;
    }
    ;
    TextFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
    };
    ;
    TextFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return TextFormComponent;
}(AbstractTemplateForm));
__decorate([
    Input(),
    __metadata("design:type", Text)
], TextFormComponent.prototype, "model", void 0);
TextFormComponent = __decorate([
    Component({
        selector: 'text-form',
        templateUrl: './text-form.component.html',
    }),
    __metadata("design:paramtypes", [AlertService,
        Location])
], TextFormComponent);
export { TextFormComponent };
//# sourceMappingURL=text-form.component.js.map