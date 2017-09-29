export class Mcq {
	id: number;
	raw: string;
	rating: number;
	original: number = 1;
	complete: number;
	generation: number;
	discussion: string;
	question: string;
	answers: string[] = Array();
	solution: number;
	rated: number;
}
