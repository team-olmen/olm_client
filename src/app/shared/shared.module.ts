import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TextViewComponent } from './text-view.component';
import { MarkdownViewComponent } from './markdown-view.component';
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
		MarkdownViewComponent,
	],
	exports: [
		CutPipe,
		TextViewComponent,
		MarkdownViewComponent,
		RouterModule,
		BrowserModule,
		FormsModule,
	],
})

export class SharedModule {}
