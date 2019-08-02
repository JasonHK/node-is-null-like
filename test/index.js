"use strict";

const { strictEqual } = require("assert");

const isNullLike = require("../index");

module.exports = {
    "isNullLike():": {
        "null": () => {
            strictEqual(isNullLike(null), true);
        },
        "undefined": () => {
            strictEqual(isNullLike(undefined), true);
        },
        "others": () => {
            // Array
            strictEqual(isNullLike([]), false);
            strictEqual(isNullLike([true, () => {}, 0, "String"]), false);

            // Boolean
            strictEqual(isNullLike(true), false);
            strictEqual(isNullLike(false), false);

            // Function
            strictEqual(isNullLike(() => {}), false);

            // Number
            strictEqual(isNullLike(0), false);
            strictEqual(isNullLike(Number.MAX_SAFE_INTEGER), false);
            strictEqual(isNullLike(Number.MIN_SAFE_INTEGER), false);
            strictEqual(isNullLike(Number.NaN), false);

            // Object
            strictEqual(isNullLike({}), false);
            strictEqual(isNullLike({ hello: "world" }), false);

            // String
            strictEqual(isNullLike(""), false);
            strictEqual(isNullLike("Full String"), false);
        },
    },
};
