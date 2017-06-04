var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { McqRoutingModule } from './mcq-routing.module';
import { McqCreateComponent } from './mcq-create.component';
import { McqFormComponent } from './mcq-form.component';
import { McqEditComponent } from './mcq-edit.component';
import { McqDisplayComponent } from './mcq-display.component';
import { McqViewComponent } from './mcq-view.component';
import { McqsViewComponent } from './mcqs-view.component';
var McqModule = (function () {
    function McqModule() {
    }
    return McqModule;
}());
McqModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            McqRoutingModule,
        ],
        declarations: [
            McqCreateComponent,
            McqFormComponent,
            McqEditComponent,
            McqDisplayComponent,
            McqViewComponent,
            McqsViewComponent,
        ],
    })
], McqModule);
export { McqModule };
//# sourceMappingURL=mcq.module.js.map