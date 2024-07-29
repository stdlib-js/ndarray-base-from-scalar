"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=n(function(w,s){"use strict";var o=require("@stdlib/array-base-assert-is-accessor-array"),c=require("@stdlib/array-base-accessor-setter"),f=require("@stdlib/array-base-setter"),m=require("@stdlib/ndarray-base-buffer"),q=require("@stdlib/ndarray-base-ctor"),v=require("@stdlib/string-format");function b(e,r,u){var a,i;if(a=m(r,1),a===null)throw new TypeError(v("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return/^complex/.test(r)&&typeof e=="number"&&(e=[e,0]),o(a)?i=c(r):i=f(r),i(a,0,e),new q(r,a,[],[0],0,u)}s.exports=b});var l=t();module.exports=l;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
