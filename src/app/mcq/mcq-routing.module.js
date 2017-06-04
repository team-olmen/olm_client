var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { McqCreateComponent } from './mcq-create.component';
import { McqEditComponent } from './mcq-edit.component';
import { McqViewComponent } from './mcq-view.component';
import { McqsViewComponent } from './mcqs-view.component';
var McqRoutingModule = (function () {
    function McqRoutingModule() {
    }
    return McqRoutingModule;
}());
McqRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'mcq/create/:moduleid', component: McqCreateComponent, canActivate: [OlmService] },
                { path: 'mcq/edit/:id/:version', component: McqEditComponent, canActivate: [OlmService] },
                { path: 'mcq/view/:id', component: McqViewComponent, canActivate: [OlmService] },
                { path: 'mcqs/view/:module/:rating/:generation/:original/:number', component: McqsViewComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], McqRoutingModule);
export { McqRoutingModule };
//# sourceMappingURL=mcq-routing.module.js.map