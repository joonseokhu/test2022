var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "path", "fs", "stream", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const path_1 = __importDefault(require("path"));
    const fs_1 = __importDefault(require("fs"));
    const stream_1 = __importDefault(require("stream"));
    const utils_1 = require("./utils");
    const createGugudanStream = async (stream) => {
        const text = await fs_1.default.promises.readFile(path_1.default.join(__dirname, '../static/gugudan.txt'), 'utf8');
        const rows = text.split('\n');
        await (0, utils_1.mapPromise)(rows, async (row) => {
            await (0, utils_1.wait)(1000);
            stream.emit('data', {
                timestamp: new Date(),
                message: row,
            });
        });
        stream.emit('end');
        stream.emit('close');
    };
    exports.default = () => {
        const stream = new stream_1.default.Readable({
            objectMode: true,
            read: () => { },
        });
        createGugudanStream(stream);
        return stream;
    };
});
//# sourceMappingURL=gugudan.stream.js.map