var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ModuleModule } from './module/module.module';
import { ExamModule } from './exam/exam.module';
import { UserModule } from './user/user.module';
import { McqModule } from './mcq/mcq.module';
import { SessionModule } from './session/session.module';
import { ProtocollModule } from './protocoll/protocoll.module';
import { TextModule } from './text/text.module';
import { OlmService } from './services/olm.service';
import { AlertService } from './services/alert.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            HttpModule,
            CoreModule,
            ModuleModule,
            ExamModule,
            UserModule,
            McqModule,
            SessionModule,
            ProtocollModule,
            TextModule,
            AppRoutingModule,
        ],
        declarations: [
            AppComponent,
        ],
        providers: [
            AlertService,
            OlmService,
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map