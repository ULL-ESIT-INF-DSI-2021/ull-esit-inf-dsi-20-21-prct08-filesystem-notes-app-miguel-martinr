"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoEdition = void 0;
const basic_error_1 = require("./basic_error");
class NoEdition extends basic_error_1.BasicError {
    constructor(notePath) {
        super(`You haven\'t edited any value of note ${notePath} !`);
        this.notePath = notePath;
    }
    toString() {
        return super.color(super.toString());
    }
}
exports.NoEdition = NoEdition;
//# sourceMappingURL=no_edition.js.map