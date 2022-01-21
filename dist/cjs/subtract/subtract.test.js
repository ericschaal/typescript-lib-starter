"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subtract_1 = require("./subtract");
test("subtract 1 - 2 to equal -1", () => {
    expect((0, subtract_1.subtract)(1, 2)).toBe(-1);
});
