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
import { Location } from '@angular/common';
import { AbstractTemplateForm } from '../core/abstract-template-form';
import { AlertService } from '../services/alert.service';
import { OlmService } from '../services/olm.service';
import 'rxjs/add/operator/switchMap';
var SessionCreateComponent = (function (_super) {
    __extends(SessionCreateComponent, _super);
    function SessionCreateComponent(route, olmService, alertService, router, locattion) {
        var _this = _super.call(this, alertService) || this;
        _this.route = route;
        _this.olmService = olmService;
        _this.alertService = alertService;
        _this.router = router;
        _this.locattion = locattion;
        _this.model = {
            'name': '',
            'modules': [],
            'rating': 3,
            'generation': 'all',
            'original': 2,
            'number': 0,
        };
        _this.formErrors = {
            'name': '',
            'modules': '',
            'rating': '',
            'generation': '',
            'original': '',
            'number': '',
        };
        _this.validationMessages = {
            'name': {
                'required': 'Bitte gib einen Namen ein.',
                'pattern': 'Der Name darf nur aus Buchstaben, Zahlen und folgenden Sonderzeichen bestehen: -_',
                'minlength': 'Der Name muss mindestend 1 Zeichen lang sein.',
                'maxlength': 'Der Name darf maximal 100 Zeichen lang sein.',
            },
            'modules': {
                'min': 'Ein bisschen mehr dürfte es schon sein.',
                'max': 'Hui! Sehr motiviert. 200 Fragen sind die Tagesration beim STEX ;) .',
                'too-many-modules': 'Bitte nicht mehr als 4 Module auswählen.'
            },
        };
        _this.numberCats = [
            { 'value': 0, 'label': 'alle' },
            { 'value': 10, 'label': '10' },
            { 'value': 20, 'label': '20' },
            { 'value': 50, 'label': '50' },
            { 'value': 100, 'label': '100' },
            { 'value': 200, 'label': '200' },
        ];
        _this.ratingCats = [
            { 'value': 3, 'label': 'alle' },
            { 'value': 1, 'label': 'nur gute Fragen' },
            { 'value': 0, 'label': 'nur schlechte Fragen (Prüfung? ;)' },
        ];
        _this.originalCats = [
            { 'value': 2, 'label': 'alle' },
            { 'value': 1, 'label': 'nur als "Original" Prüfungsfrage markierte' },
            { 'value': 0, 'label': 'keine als solche markierte Frage' },
        ];
        _this.moduleList = [];
        return _this;
    }
    SessionCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.olmService.apiReadAll('module')
            .subscribe(function (result) {
            _this.moduleList = result;
        });
        this.olmService.apiReadAll('generation')
            .subscribe(function (result) {
            _this.generationCats = [];
            _this.generationCats.push({ 'id': 'all', 'name': 'alle' });
            for (var i in result) {
                _this.generationCats.push(result[i]);
            }
        });
    };
    SessionCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.olmService.apiCreate('session', this.model)
            .subscribe(function (result) {
            _this.router.navigate(['/session/view', result.id]);
            _this.alertService.success("Daten gespeichert.");
        }, function (error) {
            _this.handleServerError(error);
        });
    };
    ;
    SessionCreateComponent.prototype.handleServerError = function (error) {
        (error === 'Item not changed') &&
            (this.setError('global', 'Die Daten waren nicht anders als zuvor. Hast Du etwas geändert? Dann ist ein Fehler aufgetreten.'));
        (error === 'Too many modules') &&
            (this.setError('modules', 'too-many-modules'));
        (error === 'No questions') &&
            (this.setError('global', 'Nach dem wir filterten waren keine Daten mehr da... Bitte filtere weniger streng ;)'));
    };
    return SessionCreateComponent;
}(AbstractTemplateForm));
SessionCreateComponent = __decorate([
    Component({
        selector: 'session-create',
        templateUrl: './session-create.component.html',
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        OlmService,
        AlertService,
        Router,
        Location])
], SessionCreateComponent);
export { SessionCreateComponent };
//# sourceMappingURL=session-create.component.js.map