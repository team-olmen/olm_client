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
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
var DoorComponent = (function (_super) {
    __extends(DoorComponent, _super);
    function DoorComponent(route, olmService, alertService, router) {
        var _this = _super.call(this, alertService) || this;
        _this.route = route;
        _this.olmService = olmService;
        _this.alertService = alertService;
        _this.router = router;
        _this.returnUrl = '';
        _this.formErrors = {
            'username': '',
            'password': '',
        };
        _this.validationMessages = {
            'username': {
                'required': 'Bitte gib deinen Benutzernamen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: ',
                'bad-name-or-pw': 'Nutzername und / oder Passwort sind falsch.',
            },
            'password': {
                'pattern': '...',
            },
        };
        return _this;
    }
    DoorComponent.prototype.ngOnInit = function () {
        this.olmService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    DoorComponent.prototype.login = function () {
        var _this = this;
        this.olmService.login(this.model.username, this.model.password)
            .subscribe(function (auth) {
            if (!auth.enabled) {
                _this.router.navigate(['/user/edit', auth.id]);
                _this.alertService.success("Herzlich Willkommen! Bitte ändere dein Passwort!");
            }
            else {
                _this.router.navigate([_this.returnUrl]);
                _this.alertService.success("Herzlich Willkommen!");
            }
        }, function (error) {
            _this.handleServerError(error);
        });
    };
    ;
    DoorComponent.prototype.handleServerError = function (error) {
        (error === 'Bad username or password') &&
            (this.setError('username', 'bad-name-or-pw')) &&
            (this.setError('password', 'bad-name-or-pw'));
    };
    ;
    return DoorComponent;
}(AbstractTemplateForm));
DoorComponent = __decorate([
    Component({
        selector: 'door',
        templateUrl: './door.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router])
], DoorComponent);
export { DoorComponent };
//# sourceMappingURL=door.component.js.map