"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicError = void 0;
const chalk = require("chalk");
class BasicError extends Error {
    constructor(msg) {
        super(msg);
    }
    color(message) {
        return chalk.red(message);
    }
}
exports.BasicError = BasicError;
//# sourceMappingURL=basic_error.js.map