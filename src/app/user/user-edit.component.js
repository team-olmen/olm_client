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
import { User } from './user';
import { UserFormComponent } from './user-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var UserEditComponent = (function () {
    function UserEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.model = new User();
        this.submitLabel = 'Änderungen speichern';
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('user', params['id'], 'current');
        })
            .subscribe(function (result) {
            _this.model = result;
            _this.model.password = '';
        });
    };
    ;
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('user', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    UserEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return UserEditComponent;
}());
__decorate([
    ViewChild(UserFormComponent),
    __metadata("design:type", UserFormComponent)
], UserEditComponent.prototype, "form", void 0);
UserEditComponent = __decorate([
    Component({
        selector: 'user-edit',
        templateUrl: './user-edit.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], UserEditComponent);
export { UserEditComponent };
//# sourceMappingURL=user-edit.component.js.map