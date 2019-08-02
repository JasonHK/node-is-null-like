// Type definitions for @jasonhk/is-null-like 1.0.0
// Definitions by: Jason Kwok <https://jasonhk.net>

/**
 * Determine whether the object is null-like or not. Null-like means the 
 * object is either `null` or `undefined`.
 * @param payload An object to be determined
 */
function isNullLike(payload: unknown): payload is null | undefined;

export = isNullLike;
