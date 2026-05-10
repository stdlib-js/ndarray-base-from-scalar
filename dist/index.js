"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=v(function(y,t){"use strict";var o=require("@stdlib/ndarray-base-assert-is-complex-floating-point-data-type"),c=require("@stdlib/assert-is-number").isPrimitive,q=require("@stdlib/array-base-assert-is-accessor-array"),f=require("@stdlib/array-base-accessor-setter"),m=require("@stdlib/array-base-setter"),l=require("@stdlib/ndarray-base-buffer"),b=require("@stdlib/ndarray-base-ctor"),d=require("@stdlib/ndarray-base-dtype-resolve-str"),g=require("@stdlib/string-format");function p(e,r,n){var a,s,i;if(a=l(r,1),a===null)throw new TypeError(g("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return i=d(r),o(i)&&c(e)&&(e=[e,0]),q(a)?s=f(i):s=m(i),s(a,0,e),new b(r,a,[],[0],0,n)}t.exports=p});var w=u();module.exports=w;
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
