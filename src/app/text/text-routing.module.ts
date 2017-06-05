import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { TextCreateComponent } from './text-create.component';
import { TextEditComponent } from './text-edit.component';
import { TextsViewComponent } from './texts-view.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'text/create', component: TextCreateComponent, canActivate: [OlmService] },
		{ path: 'text/edit/:id/:version', component: TextEditComponent, canActivate: [OlmService] },
		{ path: 'texts/view', component: TextsViewComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class TextRoutingModule {}
