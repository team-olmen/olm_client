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
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var TextViewComponent = (function () {
    function TextViewComponent(route, olmService, router) {
        this.route = route;
        this.olmService = olmService;
        this.router = router;
        this.model = {};
        this.help = false;
        this.path = '';
    }
    TextViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url
            .switchMap(function (url, index) {
            console.log(url);
            console.log(index);
            _this.path = '';
            for (var i in url) {
                _this.path = _this.path.concat(':', url[i].toString());
            }
            console.log(_this.path);
            return _this.olmService.apiReadText(_this.path);
        })
            .subscribe(function (result) {
            _this.model = result;
        });
    };
    ;
    TextViewComponent.prototype.toggleHelp = function () {
        this.help = this.help ? false : true;
    };
    ;
    return TextViewComponent;
}());
TextViewComponent = __decorate([
    Component({
        selector: 'text-view',
        templateUrl: './text-view.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        Router])
], TextViewComponent);
export { TextViewComponent };
//# sourceMappingURL=text-view.component.js.map