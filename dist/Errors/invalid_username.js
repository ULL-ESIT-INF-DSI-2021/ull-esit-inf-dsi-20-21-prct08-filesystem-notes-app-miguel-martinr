"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUsernameError = void 0;
const basic_error_1 = require("./basic_error");
class InvalidUsernameError extends basic_error_1.BasicError {
    constructor(username) {
        super(`Can\'t find a user called ${username} !`);
        this.username = username;
    }
    toString() {
        return super.color(super.toString());
    }
}
exports.InvalidUsernameError = InvalidUsernameError;
//# sourceMappingURL=invalid_username.js.map