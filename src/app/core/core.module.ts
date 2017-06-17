import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { AlertComponent } from './alert.component';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from './admin.component';
import { DoorComponent } from './door.component';
import { DoorStatusComponent } from './door-status.component';
import { DoorResetComponent } from './door-reset.component';
import { DeleteComponent } from './delete.component';
import { DeletedComponent } from './deleted.component';
import { HistoryComponent } from './history.component';


@NgModule({
	imports: [
		SharedModule,
		CoreRoutingModule,
	],
	declarations: [
		AlertComponent,
		DashboardComponent,
		AdminComponent,
		DoorComponent,
		DoorStatusComponent,
		DoorResetComponent,
		DeleteComponent,
		DeletedComponent,
		HistoryComponent,
	],
	exports: [
		AlertComponent,
		DoorStatusComponent,
	],
})

export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
	};
}
