var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { ExamCreateComponent } from './exam-create.component';
import { ExamEditComponent } from './exam-edit.component';
var ExamRoutingModule = (function () {
    function ExamRoutingModule() {
    }
    return ExamRoutingModule;
}());
ExamRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'exam/create', component: ExamCreateComponent, canActivate: [OlmService] },
                { path: 'exam/edit/:id/:version', component: ExamEditComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], ExamRoutingModule);
export { ExamRoutingModule };
//# sourceMappingURL=exam-routing.module.js.map