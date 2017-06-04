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
import { Exam } from './exam';
import { ExamFormComponent } from './exam-form.component';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
var ExamCreateComponent = (function () {
    function ExamCreateComponent(route, olmService, alertService, router) {
        this.route = route;
        this.olmService = olmService;
        this.alertService = alertService;
        this.router = router;
        this.model = new Exam();
        this.submitLabel = 'Prüfungsart erschaffen';
    }
    ExamCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('exam', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/dashboard']);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.form.handleServerError(error);
        });
    };
    ;
    return ExamCreateComponent;
}());
__decorate([
    ViewChild(ExamFormComponent),
    __metadata("design:type", ExamFormComponent)
], ExamCreateComponent.prototype, "form", void 0);
ExamCreateComponent = __decorate([
    Component({
        selector: 'exam-create',
        templateUrl: './exam-create.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router])
], ExamCreateComponent);
export { ExamCreateComponent };
//# sourceMappingURL=exam-create.component.js.map