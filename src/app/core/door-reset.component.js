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
import { Component } from '@angular/core';
import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
var DoorResetComponent = (function (_super) {
    __extends(DoorResetComponent, _super);
    function DoorResetComponent(olmService, alertService) {
        var _this = _super.call(this, alertService) || this;
        _this.olmService = olmService;
        _this.alertService = alertService;
        _this.returnUrl = '';
        _this.formErrors = {
            'email': '',
        };
        _this.validationMessages = {
            'email': {
                'required': 'Bitte gib deine Emailadresse ein.',
                'pattern': 'Bitte gib eine gültige Emailadresse ein',
            },
        };
        return _this;
    }
    DoorResetComponent.prototype.ngOnInit = function () {
    };
    DoorResetComponent.prototype.reset = function () {
        var _this = this;
        this.olmService.resetPassword(this.model.email)
            .subscribe(function (result) {
            _this.alertService.success("Sollte ein Account zu dieser Emailadresse existieren, wurde eine Email mit dem zurückgesetzten Passwort versandt. Bitte kontrollier auch den Spam-Ordner!");
        });
    };
    ;
    return DoorResetComponent;
}(AbstractTemplateForm));
DoorResetComponent = __decorate([
    Component({
        selector: 'door-reset',
        templateUrl: './door-reset.component.html',
    }),
    __metadata("design:paramtypes", [OlmService,
        AlertService])
], DoorResetComponent);
export { DoorResetComponent };
//# sourceMappingURL=door-reset.component.js.map