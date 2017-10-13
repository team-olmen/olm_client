import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { ModuleCreateComponent } from './module-create.component';
import { ModuleEditComponent } from './module-edit.component';
import { ModuleListComponent } from './module-list.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'module', component: ModuleListComponent, canActivate: [OlmService] },
		{ path: 'module/create', component: ModuleCreateComponent, canActivate: [OlmService] },
		{ path: 'module/edit/:id/:version', component: ModuleEditComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class ModuleRoutingModule {}
