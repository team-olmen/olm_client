var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TextRoutingModule } from './text-routing.module';
import { TextCreateComponent } from './text-create.component';
import { TextFormComponent } from './text-form.component';
import { TextEditComponent } from './text-edit.component';
import { TextsViewComponent } from './texts-view.component';
var TextModule = (function () {
    function TextModule() {
    }
    return TextModule;
}());
TextModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            TextRoutingModule,
        ],
        declarations: [
            TextCreateComponent,
            TextFormComponent,
            TextEditComponent,
            TextsViewComponent,
        ],
    })
], TextModule);
export { TextModule };
//# sourceMappingURL=text.module.js.map