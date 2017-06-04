import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { McqRoutingModule } from './mcq-routing.module';

import { McqCreateComponent } from './mcq-create.component';
import { McqFormComponent } from './mcq-form.component';
import { McqEditComponent } from './mcq-edit.component';
import { McqDisplayComponent } from './mcq-display.component';
import { McqViewComponent } from './mcq-view.component';
import { McqsViewComponent } from './mcqs-view.component';

@NgModule({
	imports: [
		SharedModule,
		McqRoutingModule,
	],
	declarations: [
		McqCreateComponent,
		McqFormComponent,
		McqEditComponent,
		McqDisplayComponent,
		McqViewComponent,
		McqsViewComponent,
	],
})

export class McqModule {}
