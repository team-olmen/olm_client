import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { ExamCreateComponent } from './exam-create.component';
import { ExamEditComponent } from './exam-edit.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'exam/create', component: ExamCreateComponent, canActivate: [OlmService] },
		{ path: 'exam/edit/:id/:version', component: ExamEditComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class ExamRoutingModule {}
