var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
var AbstractTemplateForm = (function () {
    function AbstractTemplateForm(alertService) {
        this.alertService = alertService;
        this.formErrors = {};
        this.validationMessages = {};
        this.model = {};
        this.parent = {};
        this.submitLabel = 'Abschicken';
    }
    ;
    AbstractTemplateForm.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    ;
    AbstractTemplateForm.prototype.formChanged = function () {
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
    AbstractTemplateForm.prototype.onValueChanged = function (data) {
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
    /**
     * https://github.com/angular/angular/blob/4.1.x/packages/forms/src/model.ts
     *
     */
    AbstractTemplateForm.prototype.setError = function (field, messageCode) {
        if (field == 'global') {
            this.alertService.error(messageCode);
        }
        else {
            var error = {};
            error[messageCode] = true;
            this.form.form.get(field).setErrors(error);
            this.onValueChanged();
        }
    };
    ;
    return AbstractTemplateForm;
}());
export { AbstractTemplateForm };
__decorate([
    Input(),
    __metadata("design:type", Object)
], AbstractTemplateForm.prototype, "model", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AbstractTemplateForm.prototype, "parent", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AbstractTemplateForm.prototype, "submitLabel", void 0);
__decorate([
    ViewChild('form'),
    __metadata("design:type", NgForm)
], AbstractTemplateForm.prototype, "currentForm", void 0);
//# sourceMappingURL=abstract-template-form.js.map