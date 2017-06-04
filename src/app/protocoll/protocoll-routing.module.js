var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { ProtocollCreateComponent } from './protocoll-create.component';
import { ProtocollEditComponent } from './protocoll-edit.component';
import { ProtocollViewComponent } from './protocoll-view.component';
import { ProtocollsViewComponent } from './protocolls-view.component';
var ProtocollRoutingModule = (function () {
    function ProtocollRoutingModule() {
    }
    return ProtocollRoutingModule;
}());
ProtocollRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'protocoll/create/:examid', component: ProtocollCreateComponent, canActivate: [OlmService] },
                { path: 'protocoll/edit/:id/:version', component: ProtocollEditComponent, canActivate: [OlmService] },
                { path: 'protocolls/view/:examid', component: ProtocollsViewComponent, canActivate: [OlmService] },
                { path: 'protocoll/view/:id', component: ProtocollViewComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], ProtocollRoutingModule);
export { ProtocollRoutingModule };
//# sourceMappingURL=protocoll-routing.module.js.map