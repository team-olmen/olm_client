import { Component, OnInit } from '@angular/core';

import { Module } from './module';

import { OlmService } from '../services/olm.service';

@Component({
	selector: 'module-list',
	templateUrl: './module-list.component.html',
})

export class ModuleListComponent implements OnInit {
	auth: any;
	modules: Module[];

	constructor(private olmService: OlmService) {};

	ngOnInit(): void {
		this.getModules();
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};

	getModules(): void {
		this.olmService.apiReadAll('module').subscribe(response => this.modules = response);
	};
}