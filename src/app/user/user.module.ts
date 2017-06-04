import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UserCreateComponent } from './user-create.component';
import { UserFormComponent } from './user-form.component';
import { UserEditComponent } from './user-edit.component';
import { UsersViewComponent } from './users-view.component';

@NgModule({
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

export class UserModule {}
