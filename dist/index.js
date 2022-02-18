var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./gugudan.stream", "./luck.async"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLuck = exports.createGugudanStream = void 0;
    var gugudan_stream_1 = require("./gugudan.stream");
    Object.defineProperty(exports, "createGugudanStream", { enumerable: true, get: function () { return __importDefault(gugudan_stream_1).default; } });
    var luck_async_1 = require("./luck.async");
    Object.defineProperty(exports, "getLuck", { enumerable: true, get: function () { return __importDefault(luck_async_1).default; } });
});
//# sourceMappingURL=index.js.map