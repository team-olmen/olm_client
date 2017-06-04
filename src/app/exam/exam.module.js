var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamCreateComponent } from './exam-create.component';
import { ExamFormComponent } from './exam-form.component';
import { ExamEditComponent } from './exam-edit.component';
var ExamModule = (function () {
    function ExamModule() {
    }
    return ExamModule;
}());
ExamModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            ExamRoutingModule,
        ],
        declarations: [
            ExamCreateComponent,
            ExamFormComponent,
            ExamEditComponent,
        ],
    })
], ExamModule);
export { ExamModule };
//# sourceMappingURL=exam.module.js.map