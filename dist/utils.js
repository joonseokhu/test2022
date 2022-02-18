(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRandomInt = exports.mapPromise = exports.wait = void 0;
    const wait = (time) => (new Promise((resolve) => {
        setTimeout(() => resolve(time), time);
    }));
    exports.wait = wait;
    const mapPromise = (arr, callback) => arr.reduce(async (pacc, item, index) => {
        const acc = await pacc;
        const currentResult = await callback(item, index);
        return acc.concat(currentResult);
    }, Promise.resolve([]));
    exports.mapPromise = mapPromise;
    const getRandomInt = (from, to) => {
        const min = Math.ceil(from);
        const max = Math.floor(to);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    exports.getRandomInt = getRandomInt;
});
//# sourceMappingURL=utils.js.map