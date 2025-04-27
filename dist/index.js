"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(A,s){"use strict";var o=require("@stdlib/assert-is-number").isPrimitive,c=require("@stdlib/array-base-assert-is-accessor-array"),v=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),q=require("@stdlib/array-base-accessor-setter"),f=require("@stdlib/array-base-setter"),m=require("@stdlib/ndarray-base-buffer"),b=require("@stdlib/ndarray-base-ctor"),l=require("@stdlib/string-format");function g(e,r,t){var a,i;if(a=m(r,1),a===null)throw new TypeError(l("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return v(r)&&o(e)&&(e=[e,0]),c(a)?i=q(r):i=f(r),i(a,0,e),new b(r,a,[],[0],0,t)}s.exports=g});var w=u();module.exports=w;
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
