import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cut'})
export class CutPipe implements PipeTransform {
	transform(text: string, n: number): string {
		let shortened = text.substr(0, n);
		if (/^\S/.test(text.substr(n)))
			return shortened.replace(/\s+\S*$/, "");
		return shortened;
	}
}
