import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { Location } from '@angular/common';

import { OlmService } from '../services/olm.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'text-view',
	templateUrl: './text-view.component.html',
})

export class TextViewComponent {
	model: any = {};
	help: boolean = false;
	path: string = '';

	constructor(
		private route: ActivatedRoute,
		private olmService: OlmService,
		private router: Router
	) { }

	ngOnInit() {
		this.route.url
			.switchMap((url: UrlSegment[], index: number) => {
				//console.log(url);
				//console.log(index);
				this.path = '';
				for (let i in url) {
					this.path = this.path.concat(':', url[i].toString());
				}
				console.log(this.path);
				return this.olmService.apiReadText(this.path);
			})
			.subscribe(result => {
				this.model = result;
			});
	};

	toggleHelp() {
		this.help = this.help ? false : true;
	};
}
