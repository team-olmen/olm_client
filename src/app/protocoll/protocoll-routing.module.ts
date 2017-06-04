import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { ProtocollCreateComponent } from './protocoll-create.component';
import { ProtocollEditComponent } from './protocoll-edit.component';
import { ProtocollViewComponent } from './protocoll-view.component';
import { ProtocollsViewComponent } from './protocolls-view.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'protocoll/create/:examid', component: ProtocollCreateComponent, canActivate: [OlmService] },
		{ path: 'protocoll/edit/:id/:version', component: ProtocollEditComponent, canActivate: [OlmService] },
		{ path: 'protocolls/view/:examid', component: ProtocollsViewComponent, canActivate: [OlmService] },
		{ path: 'protocoll/view/:id', component: ProtocollViewComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class ProtocollRoutingModule {}
