"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./core"));
exports.coreFunction = () => {
    console.log('Hello from core functions.');
};
exports.coreAdder = (a, b) => {
    return a + b;
};
//# sourceMappingURL=index.js.map