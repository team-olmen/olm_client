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
import { Text } from './text';
import { TextFormComponent } from './text-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var TextEditComponent = (function () {
    function TextEditComponent(route, olmService, alertService, router, location) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.location = location;
        this.id = -1;
        this.version = 'current';
        this.model = new Text();
        this.submitLabel = 'Änderungen speichern';
        this.auth = {};
    }
    TextEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.route.params
            .switchMap(function (params) {
            _this.id = params['id'];
            return _this.olmService.apiRead('text', params['id'], params['version']);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    TextEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiUpdate('text', this.model.id, this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/texts/view', result.exam]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    TextEditComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return TextEditComponent;
}());
__decorate([
    ViewChild(TextFormComponent),
    __metadata("design:type", TextFormComponent)
], TextEditComponent.prototype, "form", void 0);
TextEditComponent = __decorate([
    Component({
        selector: 'text-edit',
        templateUrl: './text-edit.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], TextEditComponent);
export { TextEditComponent };
//# sourceMappingURL=text-edit.component.js.map