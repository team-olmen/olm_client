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
import { Location } from '@angular/common';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var TextsViewComponent = (function () {
    function TextsViewComponent(olmService, alertService, location) {
        this.olmService = olmService;
        this.alertService = alertService;
        this.location = location;
        this.id = -1;
        this.items = [];
        this.auth = {};
    }
    TextsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
        this.olmService.apiReadAll('text')
            .subscribe(function (result) {
            _this.items = result;
        });
    };
    TextsViewComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return TextsViewComponent;
}());
TextsViewComponent = __decorate([
    Component({
        selector: 'texts-view',
        templateUrl: './texts-view.component.html',
    }),
    __metadata("design:paramtypes", [OlmService,
        AlertService,
        Location])
], TextsViewComponent);
export { TextsViewComponent };
//# sourceMappingURL=texts-view.component.js.map