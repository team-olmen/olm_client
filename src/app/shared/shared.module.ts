import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TextViewComponent } from './text-view.component';
import { CutPipe } from './cut.pipe';

@NgModule({
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
	],
	declarations: [
		CutPipe,
		TextViewComponent,
	],
	exports: [
		CutPipe,
		TextViewComponent,
		RouterModule,
		BrowserModule,
		FormsModule,
	],
})

export class SharedModule {}
