var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { UserCreateComponent } from './user-create.component';
import { UserEditComponent } from './user-edit.component';
import { UsersViewComponent } from './users-view.component';
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'user/create', component: UserCreateComponent, canActivate: [OlmService] },
                { path: 'user/edit/:id', component: UserEditComponent, canActivate: [OlmService] },
                { path: 'users/view', component: UsersViewComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map