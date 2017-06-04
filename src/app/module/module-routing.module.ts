import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { ModuleCreateComponent } from './module-create.component';
import { ModuleEditComponent } from './module-edit.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'module/create', component: ModuleCreateComponent, canActivate: [OlmService] },
		{ path: 'module/edit/:id/:version', component: ModuleEditComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class ModuleRoutingModule {}
