"use strict";

/**
 * Determine whether the object is null-like or not. Null-like means the 
 * object is either `null` or `undefined`.
 * @param {*} payload An object to be determined
 * @return {boolean}
 */
function isNullLike(payload) {

    return (payload === null) || (typeof payload === "undefined");
}

module.exports = isNullLike;
