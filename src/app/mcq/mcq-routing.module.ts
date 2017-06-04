import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { McqCreateComponent } from './mcq-create.component';
import { McqEditComponent } from './mcq-edit.component';
import { McqViewComponent } from './mcq-view.component';
import { McqsViewComponent } from './mcqs-view.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'mcq/create/:moduleid', component: McqCreateComponent, canActivate: [OlmService] },
		{ path: 'mcq/edit/:id/:version', component: McqEditComponent, canActivate: [OlmService] },
		{ path: 'mcq/view/:id', component: McqViewComponent, canActivate: [OlmService] },
		{ path: 'mcqs/view/:module/:rating/:generation/:original/:number', component: McqsViewComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class McqRoutingModule {}
