import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DocRoutingModule } from './doc-routing.module';

import { DocCreateComponent } from './doc-create.component';
import { DocFormComponent } from './doc-form.component';
import { DocEditComponent } from './doc-edit.component';
import { DocViewComponent } from './doc-view.component';

@NgModule({
	imports: [
		SharedModule,
		DocRoutingModule,
	],
	declarations: [
		DocCreateComponent,
		DocFormComponent,
		DocEditComponent,
		DocViewComponent,
	],
})

export class DocModule {}
