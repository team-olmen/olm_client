var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { TextCreateComponent } from './text-create.component';
import { TextEditComponent } from './text-edit.component';
import { TextsViewComponent } from './texts-view.component';
var TextRoutingModule = (function () {
    function TextRoutingModule() {
    }
    return TextRoutingModule;
}());
TextRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'text/create/:id', component: TextCreateComponent, canActivate: [OlmService] },
                { path: 'text/edit/:id/:version', component: TextEditComponent, canActivate: [OlmService] },
                { path: 'texts/view', component: TextsViewComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], TextRoutingModule);
export { TextRoutingModule };
//# sourceMappingURL=text-routing.module.js.map