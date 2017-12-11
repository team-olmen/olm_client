export class Module {

	public id: number
	public code: string
	public name: string
	public category: string

	constructor(init: any = {}) {this.id = init.id; this.code = init.code; this.name = init.name; this.category = init.category;}

	get starred() {
		return !!(window.localStorage.getItem('starred') || '').split(',').find(s => Number(s) == this.id);
	}

	set starred(value: boolean) {
		let starred = new Set((window.localStorage.getItem('starred') || '').split(','));
		value ? starred.add(String(this.id)) : starred.delete(String(this.id));
		window.localStorage.setItem('starred', Array.from(starred).join(','));
	}
}
