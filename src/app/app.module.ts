import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { DocModule } from './doc/doc.module';

import { OlmService } from './services/olm.service';
import { AlertService } from './services/alert.service';

@NgModule({
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
		DocModule,
		AppRoutingModule,
		BrowserAnimationsModule,
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

export class AppModule { }
