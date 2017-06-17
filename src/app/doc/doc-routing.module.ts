import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { DocCreateComponent } from './doc-create.component';
import { DocEditComponent } from './doc-edit.component';
import { DocViewComponent } from './doc-view.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'doc/create', component: DocCreateComponent, canActivate: [OlmService] },
		{ path: 'doc/edit/:id/:version', component: DocEditComponent, canActivate: [OlmService] },
		{ path: 'doc/view/:id/:version', component: DocViewComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class DocRoutingModule {}
