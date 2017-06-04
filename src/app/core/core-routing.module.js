var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlmService } from '../services/olm.service';
import { DashboardComponent } from './dashboard.component';
import { DoorComponent } from './door.component';
import { DoorResetComponent } from './door-reset.component';
import { DeleteComponent } from './delete.component';
import { DeletedComponent } from './deleted.component';
import { HistoryComponent } from './history.component';
var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
    }
    return CoreRoutingModule;
}());
CoreRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild([
                { path: 'door', component: DoorComponent },
                { path: 'dashboard', component: DashboardComponent, canActivate: [OlmService] },
                { path: 'door/reset', component: DoorResetComponent },
                //{ path: 'delete/:type/:id', component: DeleteComponent, canActivate: [OlmService] },
                //{ path: 'deleted/:type', component: DeletedComponent, canActivate: [OlmService] },
                //{ path: 'history/:type/:id', component: HistoryComponent, canActivate: [OlmService] },
                { path: ':type/delete/:id', component: DeleteComponent, canActivate: [OlmService] },
                { path: ':type/deleted', component: DeletedComponent, canActivate: [OlmService] },
                { path: ':type/history/:id', component: HistoryComponent, canActivate: [OlmService] },
            ])],
        exports: [RouterModule]
    })
], CoreRoutingModule);
export { CoreRoutingModule };
//# sourceMappingURL=core-routing.module.js.map