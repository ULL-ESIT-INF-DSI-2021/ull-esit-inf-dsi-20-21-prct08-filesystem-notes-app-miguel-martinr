"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidNote = void 0;
const basic_error_1 = require("./basic_error");
class InvalidNote extends basic_error_1.BasicError {
    constructor(notePath) {
        super(`Can\'t find note called ${notePath} !`);
        this.notePath = notePath;
    }
    toString() {
        return super.color(super.toString());
    }
}
exports.InvalidNote = InvalidNote;
//# sourceMappingURL=invalid_note.js.map