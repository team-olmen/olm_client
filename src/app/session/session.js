var Session = (function () {
    function Session() {
    }
    Session.prototype.finishQuestion = function (answer, state) {
        if (this.status[this.current] == 2) {
            this.status[this.current] = state;
            this.answers[this.current] = answer;
            this.answered++;
            this.correct += state == 1 ? 1 : 0;
        }
    };
    ;
    Session.prototype.next = function () {
        if (this.current < this.total - 1) {
            this.current++;
        }
    };
    ;
    Session.prototype.previous = function () {
        if (this.current > 0) {
            this.current--;
        }
    };
    ;
    Session.prototype.getMcqId = function () {
        return this.questions[this.current];
    };
    ;
    Session.prototype.getAnswer = function () {
        return this.answers[this.current];
    };
    ;
    Session.prototype.getState = function () {
        return this.status[this.current];
    };
    ;
    Session.prototype.removeCurrent = function () {
        if (this.status[this.current] == 1) {
            this.answered -= 1;
            this.correct -= 1;
        }
        else if (this.status[this.current] == 0) {
            this.answered -= 1;
        }
        this.total -= 1;
        delete this.questions[this.current];
        delete this.answers[this.current];
        delete this.status[this.current];
    };
    ;
    return Session;
}());
export { Session };
//# sourceMappingURL=session.js.map