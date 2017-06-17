import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { DocCreateComponent } from './doc-create.component';
import { DocEditComponent } from './doc-edit.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'doc/create', component: DocCreateComponent, canActivate: [OlmService] },
		{ path: 'doc/edit/:id/:version', component: DocEditComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class DocRoutingModule {}
