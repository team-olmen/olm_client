import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExamRoutingModule } from './exam-routing.module';

import { ExamCreateComponent } from './exam-create.component';
import { ExamFormComponent } from './exam-form.component';
import { ExamEditComponent } from './exam-edit.component';
import { ExamListComponent } from './exam-list.component';

@NgModule({
	imports: [
		SharedModule,
		ExamRoutingModule,
	],
	declarations: [
		ExamCreateComponent,
		ExamFormComponent,
		ExamEditComponent,
		ExamListComponent,
	],
})

export class ExamModule {}
