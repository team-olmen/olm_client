var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { SessionCreateComponent } from './session-create.component';
import { SessionViewComponent } from './session-view.component';
var SessionRoutingModule = (function () {
    function SessionRoutingModule() {
    }
    return SessionRoutingModule;
}());
SessionRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'session/create', component: SessionCreateComponent, canActivate: [OlmService] },
                { path: 'session/view/:id', component: SessionViewComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], SessionRoutingModule);
export { SessionRoutingModule };
//# sourceMappingURL=session-routing.module.js.map