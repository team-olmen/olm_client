var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create.component';
import { UserFormComponent } from './user-form.component';
import { UserEditComponent } from './user-edit.component';
import { UsersViewComponent } from './users-view.component';
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    NgModule({
        imports: [
            SharedModule,
            UserRoutingModule,
        ],
        declarations: [
            UserCreateComponent,
            UserFormComponent,
            UserEditComponent,
            UsersViewComponent,
        ],
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map