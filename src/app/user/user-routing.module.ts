import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { UserCreateComponent } from './user-create.component';
import { UserEditComponent } from './user-edit.component';
import { UsersViewComponent } from './users-view.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'user/create', component: UserCreateComponent, canActivate: [OlmService] },
		{ path: 'user/edit/:id', component: UserEditComponent, canActivate: [OlmService] },
		{ path: 'users/view', component: UsersViewComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class UserRoutingModule {}
