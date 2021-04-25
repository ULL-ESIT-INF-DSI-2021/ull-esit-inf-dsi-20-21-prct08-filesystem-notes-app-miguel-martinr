"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidColor = void 0;
const basic_error_1 = require("./basic_error");
class InvalidColor extends basic_error_1.BasicError {
    constructor(invalidColor) {
        super(`Can\'t recognize color ${invalidColor} !`);
        this.invalidColor = invalidColor;
    }
    toString() {
        return super.color(super.toString());
    }
}
exports.InvalidColor = InvalidColor;
//# sourceMappingURL=invalid_color.js.map