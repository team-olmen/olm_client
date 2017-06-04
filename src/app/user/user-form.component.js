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
import { User } from './user';
import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
var UserFormComponent = (function (_super) {
    __extends(UserFormComponent, _super);
    function UserFormComponent(alertService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.location = location;
        _this.formErrors = {
            'username': '',
            'email': '',
            'password': '',
            'check': '',
        };
        _this.validationMessages = {
            'username': {
                'required': 'Bitte gib einen Benutzernamen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: ',
                'minlength': 'Der Name muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
                'exists': 'Es gibt schon einen Benutzer mit diesem Namen.',
            },
            'email': {
                'required': 'Bitte gib eine Email-Adresse ein.',
                'pattern': 'Die Adresse muss deine @charite.de-Adresse sein.',
                'minlength': 'Die Emailadresse muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Die Emailadresse darf maximal 100 Zeichen lang sein.',
                'exists': 'Es gibt schon einen Benutzer mit dieser Emailadresse. Hast Du Dein Passwort vergessen? Du kannst es zurücksetzen!',
            },
            'password': {
                'required': 'Bitte gib ein Passwort ein.',
                'pattern': '...',
                'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
                'does-not-match': 'Die Passwörter stimmen nicht überein.',
            },
            'check': {
                'required': 'Bitte wiederhole das Passwort.',
                'pattern': '...',
                'minlength': 'Das Passwort muss mindestend 5 Zeichen lang sein.',
                'maxlength': 'Das Passwort darf maximal 100 Zeichen lang sein.',
                'does-not-match': 'Die Passwörter stimmen nicht überein.',
            },
        };
        return _this;
    }
    ;
    UserFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Invalid request') &&
            (this.setError('global', 'Der Server sagt, dass irgend etwas mit den Daten nicht stimmt.'));
        (error === 'Passwords do not match') &&
            (this.setError('password', 'does-not-match')) &&
            (this.setError('check', 'does-not-match'));
        (error === 'Username exists') &&
            (this.setError('username', 'exists'));
        (error === 'Email exists') &&
            (this.setError('email', 'exists'));
    };
    ;
    UserFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return UserFormComponent;
}(AbstractTemplateForm));
__decorate([
    Input(),
    __metadata("design:type", User)
], UserFormComponent.prototype, "model", void 0);
UserFormComponent = __decorate([
    Component({
        selector: 'user-form',
        templateUrl: './user-form.component.html',
    }),
    __metadata("design:paramtypes", [AlertService,
        Location])
], UserFormComponent);
export { UserFormComponent };
//# sourceMappingURL=user-form.component.js.map