import { Component, OnInit } from '@angular/core';

import { Module } from './module';

import { OlmService } from '../services/olm.service';

@Component({
	selector: 'module-list',
	templateUrl: './module-list.component.html',
})

export class ModuleListComponent implements OnInit {
	auth: any;
	modules: Module[] = [];

	constructor(private olmService: OlmService) {};

	ngOnInit(): void {
		this.getModules();
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};

	getModules(): void {
		this.olmService.apiReadAll('module').subscribe(response => {
			this.modules.length = 0;
			for(module of response) {
				this.modules.push(new Module(module));
			}
		});
	};

	sortedModules(): Module[] {
		//return this.modules.filter((m) => m.starred === value);
		return this.modules.sort((m1, m2) => m1.starred === m2.starred ? (m1.id - m2.id) : m1.starred ? -1 : 1);
	};

	trackModule(index: number, module: Module) {
		return index;// module ? module.id : undefined;
	};
}