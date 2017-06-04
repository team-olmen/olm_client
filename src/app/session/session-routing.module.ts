import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { SessionCreateComponent } from './session-create.component';
import { SessionViewComponent } from './session-view.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'session/create', component: SessionCreateComponent, canActivate: [OlmService] },
		{ path: 'session/view/:id', component: SessionViewComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class SessionRoutingModule {}
