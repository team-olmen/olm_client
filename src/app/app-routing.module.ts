import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OlmService } from './services/olm.service'

const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [OlmService] },
	{ path: '**', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [OlmService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
