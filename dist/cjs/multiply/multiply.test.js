"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = require("./multiply");
test("multiplies 5 * 2 to equal 10", () => {
    expect((0, multiply_1.multiply)(5, 2)).toBe(10);
});
