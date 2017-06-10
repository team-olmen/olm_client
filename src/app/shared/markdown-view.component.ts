import { Component, OnInit, OnChanges, Input } from '@angular/core';

declare var showdown:any;

@Component({
	selector: 'markdown-view',
	templateUrl: './markdown-view.component.html',
})

export class MarkdownViewComponent {
	@Input() text: string = '';
	output: string = '';
	converter: any = {};

	constructor(
	) {
		this.converter = new showdown.Converter({
			headerLevelStart: 2,
			strikethrough: true;
		});
	}

	ngOnInit() {
		this.output = this.parseMarkdown(this.text);
	};

	ngOnChanges() {
		this.output = this.parseMarkdown(this.text);
	};

	parseMarkdown(markdown: string): string {
		return this.converter.makeHtml(markdown);
	};
}
