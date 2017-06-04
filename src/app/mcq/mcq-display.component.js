var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mcq } from './mcq';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
var McqDisplayComponent = (function () {
    function McqDisplayComponent(olmService, alertService) {
        this.olmService = olmService;
        this.alertService = alertService;
        this.model = {};
        this.auth = { admin: 0 };
        this.formErrors = {
            'discussion': '',
        };
        this.validationMessages = {
            'discussion': {},
        };
    }
    McqDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.getAuth().subscribe(function (auth) {
            _this.auth = auth;
        });
    };
    ;
    McqDisplayComponent.prototype.ngOnChanges = function () {
        if (this.auth.admin) {
            this.model.discussion = this.item.discussion;
        }
        else {
            this.model.discussion = '';
        }
    };
    ;
    McqDisplayComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    ;
    McqDisplayComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.form) {
            return;
        }
        this.form = this.currentForm;
        if (this.form) {
            this.form.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    ;
    McqDisplayComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ;
    McqDisplayComponent.prototype.onSubmit = function () {
        var _this = this;
        var discussion = '';
        if (this.auth.admin) {
            discussion = this.model.discussion;
        }
        else {
            discussion = this.item.discussion.concat("\n\n**", this.auth.name, "**:\n", this.model.discussion);
        }
        this.olmService.apiUpdate('mcq', this.item.id, {
            id: this.item.id,
            discussion: discussion,
        })
            .subscribe(function (result) {
            _this.item.discussion = result.discussion;
            if (_this.auth.admin) {
                _this.model.discussion = result.discussion;
            }
            else {
                _this.model.discussion = '';
            }
        });
    };
    ;
    McqDisplayComponent.prototype.rate = function (rating) {
        var _this = this;
        this.olmService.apiUpdate('mcq', this.item.id, {
            id: this.item.id,
            rated: rating,
        })
            .subscribe(function (result) {
            _this.item.rating = result.rating;
        });
    };
    ;
    return McqDisplayComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Mcq)
], McqDisplayComponent.prototype, "item", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], McqDisplayComponent.prototype, "discussion", void 0);
__decorate([
    ViewChild('form'),
    __metadata("design:type", NgForm)
], McqDisplayComponent.prototype, "currentForm", void 0);
McqDisplayComponent = __decorate([
    Component({
        selector: 'mcq-display',
        templateUrl: './mcq-display.component.html',
    }),
    __metadata("design:paramtypes", [OlmService,
        AlertService])
], McqDisplayComponent);
export { McqDisplayComponent };
//# sourceMappingURL=mcq-display.component.js.map