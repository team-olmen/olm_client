import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SessionRoutingModule } from './session-routing.module';

import { SessionCreateComponent } from './session-create.component';
import { SessionViewComponent } from './session-view.component';
import { SessionListComponent } from './session-list.component';

@NgModule({
	imports: [
		SharedModule,
		SessionRoutingModule,
	],
	declarations: [
		SessionCreateComponent,
		SessionViewComponent,
		SessionListComponent,
	],
})

export class SessionModule {}
