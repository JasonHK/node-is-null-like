@jasonhk/is-null-like
=====================

A simple library to determine whether the object is null-like or not.

[![npm-version-badge]][npm-package] [![npm-download-badge]][npm-package] [![github-license-badge]][github-license]

## Installation

```sh
$ npm i @jasonhk/is-null-like
```

## Usage

```javascript
const isNullLike = require("@jasonhk/is-null-like");

// return true
isNullLike(null);
isNullLike(undefined);

// return false
isNullLike([]);
isNullLike(true);
isNullLike(() => {});
isNullLike(6894);
isNullLike({});
isNullLike("Hello, world!");
```

## License

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>
```

[github-license]: https://github.com/JasonHK/node-is-null-like/blob/master/LICENSE
[github-license-badge]: https://img.shields.io/github/license/JasonHK/node-is-null-like?style=flat-square

[npm-package]: https://www.npmjs.com/package/@jasonhk/is-null-like
[npm-download-badge]: https://img.shields.io/npm/dt/@jasonhk/is-null-like?style=flat-square
[npm-version-badge]: https://img.shields.io/npm/v/@jasonhk/is-null-like?style=flat-square
