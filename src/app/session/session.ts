export class Session {
	id: number;
	user: number;
	name: string;
	questions: number[];
	answers: number[];
	status: number[];
	correct: number;
	answered: number;
	total: number;
	current: number;

	finishQuestion(answer: number, state: number): void {
		if (this.status[this.current] == 2) {
			this.status[this.current] = state;
			this.answers[this.current] = answer;
			this.answered++;
			this.correct += state == 1 ? 1 : 0;
		}
	};

	next(): void {
		if (this.current < this.total - 1) {
			this.current++;
		}
	};

	previous(): void {
		if (this.current > 0) {
			this.current--;
		}
	};

	getMcqId(): number{
		return this.questions[this.current];
	};

	getAnswer(): number{
		return this.answers[this.current];
	};

	getState(): number{
		return this.status[this.current];
	};

	removeCurrent(): void {
		if (this.status[this.current] == 1) {
			this.answered -= 1;
			this.correct -= 1;
		} else if (this.status[this.current] == 0) {
			this.answered -= 1;
		}
		this.total -= 1;
		delete this.questions[this.current];
		delete this.answers[this.current];
		delete this.status[this.current];
	};
}
