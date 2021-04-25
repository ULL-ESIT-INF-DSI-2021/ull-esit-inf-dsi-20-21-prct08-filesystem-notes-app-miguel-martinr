"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeatedNoteError = void 0;
const basic_error_1 = require("./basic_error");
class RepeatedNoteError extends basic_error_1.BasicError {
    constructor(notePath) {
        super(`There\'s already a note called ${notePath} !`);
        this.notePath = notePath;
    }
    toString() {
        return super.color(super.toString());
    }
}
exports.RepeatedNoteError = RepeatedNoteError;
//# sourceMappingURL=repeated_note.js.map