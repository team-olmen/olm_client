import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from '../services/olm.service';

import { DashboardComponent } from './dashboard.component';
import { DoorComponent } from './door.component';
import { DoorResetComponent } from './door-reset.component';
import { DeleteComponent } from './delete.component';
import { DeletedComponent } from './deleted.component';
import { HistoryComponent } from './history.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'door', component: DoorComponent },
		{ path: 'dashboard', component: DashboardComponent, canActivate: [OlmService] },
		{ path: 'door/reset', component: DoorResetComponent },
		//{ path: 'delete/:type/:id', component: DeleteComponent, canActivate: [OlmService] },
		//{ path: 'deleted/:type', component: DeletedComponent, canActivate: [OlmService] },
		//{ path: 'history/:type/:id', component: HistoryComponent, canActivate: [OlmService] },
		{ path: ':type/delete/:id/:version', component: DeleteComponent, canActivate: [OlmService] },
		{ path: ':type/deleted', component: DeletedComponent, canActivate: [OlmService] },
		{ path: ':type/history/:id', component: HistoryComponent, canActivate: [OlmService] },
	])],
	exports: [RouterModule]
})
export class CoreRoutingModule {}
