var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "path", "fs", "stream", "./luck.async", "./gugudan.stream"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const path_1 = __importDefault(require("path"));
    const fs_1 = __importDefault(require("fs"));
    const stream_1 = require("stream");
    const luck_async_1 = __importDefault(require("./luck.async"));
    const gugudan_stream_1 = __importDefault(require("./gugudan.stream"));
    (0, luck_async_1.default)('허준석', 32, (err, luck) => {
        if (err)
            return console.log('err', err);
        return console.log('success', luck);
    });
    const gugudanStream = (0, gugudan_stream_1.default)();
    const toJSONStream = new stream_1.Transform({
        transform(data, encoding, callback) {
            console.log('data', data);
            callback(null, `${JSON.stringify(data)}\n`);
        },
        objectMode: true,
    });
    const writeFileStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, '../static/result.txt'), 'utf8');
    gugudanStream
        .pipe(toJSONStream)
        .pipe(writeFileStream);
});
//# sourceMappingURL=example.js.map