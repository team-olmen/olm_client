import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProtocollRoutingModule } from './protocoll-routing.module';

import { ProtocollCreateComponent } from './protocoll-create.component';
import { ProtocollFormComponent } from './protocoll-form.component';
import { ProtocollEditComponent } from './protocoll-edit.component';
import { ProtocollViewComponent } from './protocoll-view.component';
import { ProtocollsViewComponent } from './protocolls-view.component';

@NgModule({
	imports: [
		SharedModule,
		ProtocollRoutingModule,
	],
	declarations: [
		ProtocollCreateComponent,
		ProtocollFormComponent,
		ProtocollEditComponent,
		ProtocollViewComponent,
		ProtocollsViewComponent,
	],
})

export class ProtocollModule {}
