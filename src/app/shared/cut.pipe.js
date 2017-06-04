var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var CutPipe = (function () {
    function CutPipe() {
    }
    CutPipe.prototype.transform = function (text, n) {
        var shortened = text.substr(0, n);
        if (/^\S/.test(text.substr(n)))
            return shortened.replace(/\s+\S*$/, "");
        return shortened;
    };
    return CutPipe;
}());
CutPipe = __decorate([
    Pipe({ name: 'cut' })
], CutPipe);
export { CutPipe };
//# sourceMappingURL=cut.pipe.js.map