import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TextRoutingModule } from './text-routing.module';

import { TextCreateComponent } from './text-create.component';
import { TextFormComponent } from './text-form.component';
import { TextEditComponent } from './text-edit.component';
import { TextsViewComponent } from './texts-view.component';

@NgModule({
	imports: [
		SharedModule,
		TextRoutingModule,
	],
	declarations: [
		TextCreateComponent,
		TextFormComponent,
		TextEditComponent,
		TextsViewComponent,
	],
})

export class TextModule {}
