var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextViewComponent } from './text-view.component';
import { CutPipe } from './cut.pipe';
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
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
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map