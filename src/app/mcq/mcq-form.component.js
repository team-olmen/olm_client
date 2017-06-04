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
import { Mcq } from './mcq';
import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
var McqFormComponent = (function (_super) {
    __extends(McqFormComponent, _super);
    function McqFormComponent(alertService, olmService, location) {
        var _this = _super.call(this, alertService) || this;
        _this.alertService = alertService;
        _this.olmService = olmService;
        _this.location = location;
        _this.generationsCats = [];
        _this.originalCats = [
            { 'value': 1, 'label': 'Prüfungsfrage' },
            { 'value': 0, 'label': 'selbst erstellt (und damit besser ;) )' },
        ];
        _this.formErrors = {
            'raw': '',
            'discussion': '',
            'original': '',
        };
        _this.validationMessages = {
            'raw': {
                'required': 'Bitte gib eine Frage ein.',
                'question-missing': 'Ich kann keine Frage entdecken. Stimmt die Formatierung?',
                'answers-missing': 'Ich kann keine Antworten entdecken. Stimmt die Formatierung?',
                'solution-missing': 'Ich kann keine Lösung entdecken. Stimmt die Formatierung?',
            },
            'discussion': {},
            'original': {},
        };
        return _this;
    }
    ;
    McqFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.apiReadAll('generation')
            .subscribe(function (result) {
            _this.generationsCats = result;
        });
    };
    McqFormComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Question missing') &&
            (this.setError('raw', 'question-missing'));
        (error === 'Answers missing') &&
            (this.setError('raw', 'answers-missing'));
        (error === 'Solution missing') &&
            (this.setError('raw', 'solution-missing'));
    };
    ;
    McqFormComponent.prototype.back = function () {
        this.location.back();
    };
    ;
    return McqFormComponent;
}(AbstractTemplateForm));
__decorate([
    Input(),
    __metadata("design:type", Mcq)
], McqFormComponent.prototype, "model", void 0);
McqFormComponent = __decorate([
    Component({
        selector: 'mcq-form',
        templateUrl: './mcq-form.component.html',
    }),
    __metadata("design:paramtypes", [AlertService,
        OlmService,
        Location])
], McqFormComponent);
export { McqFormComponent };
//# sourceMappingURL=mcq-form.component.js.map