// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(o,m){var n;if(null===(n=e(m,1)))throw new TypeError(s("0MG3J",m));return/^complex/.test(m)&&"number"==typeof o&&(o=[o,0]),r(n).setter(n,0,o),new t(m,n,[],[0],0,"row-major")}export{o as default};
//# sourceMappingURL=index.mjs.map
