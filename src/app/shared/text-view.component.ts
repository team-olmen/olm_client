import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OlmService } from '../services/olm.service';

@Component({
	selector: 'text-view',
	templateUrl: './text-view.component.html',
})

export class TextViewComponent {
	auth: any = {};
	model: any = {};
	help: boolean = false;
	@Input() path: string = '';

	constructor(
		private olmService: OlmService,
		private router: Router,
	) { }

	ngOnInit() {
		this.olmService.getAuth().subscribe(auth => this.auth = auth);
	};

	ngOnChanges() {
		if (this.path === '') {
			return
		}
		this.getText();
	};

	getText() {
		this.olmService.apiReadText(this.path)			
			.subscribe(result => {
				this.model = result;
			});
	};

	gotoTextCreate() {
		this.router.navigate(['/text/create', { path: this.path }]);
	};

	toggleHelp() {
		this.help = this.help ? false : true;
	};
}
