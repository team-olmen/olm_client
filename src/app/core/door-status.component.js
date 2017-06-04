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
import { OlmService } from '../services/olm.service';
var DoorStatusComponent = (function () {
    function DoorStatusComponent(olmService) {
        this.olmService = olmService;
    }
    DoorStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) { return _this.auth = auth; });
    };
    return DoorStatusComponent;
}());
DoorStatusComponent = __decorate([
    Component({
        selector: 'door-status',
        templateUrl: './door-status.component.html',
    }),
    __metadata("design:paramtypes", [OlmService])
], DoorStatusComponent);
export { DoorStatusComponent };
//# sourceMappingURL=door-status.component.js.map