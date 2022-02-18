(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const utils_1 = require("./utils");
    const getLuck = async (name, age) => {
        await (0, utils_1.wait)(1500);
        if (!name)
            throw new Error('이름은 필수입니다.');
        if (!age)
            throw new Error('나이는 필수입니다.');
        const luck = (0, utils_1.getRandomInt)(0, 100);
        if (luck < 20)
            throw new Error('운세결과가 너무 안좋아서 에러가 났습니다.');
        return luck;
    };
    exports.default = (name, age, callback) => {
        getLuck(name, age)
            .then((luck) => callback(null, luck))
            .catch((err) => callback(err));
    };
});
//# sourceMappingURL=luck.async.js.map