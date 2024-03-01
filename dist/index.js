"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=n(function(w,s){
var o=require('@stdlib/array-base-assert-is-accessor-array/dist'),c=require('@stdlib/array-base-accessor-setter/dist'),f=require('@stdlib/array-base-setter/dist'),m=require('@stdlib/ndarray-base-buffer/dist'),q=require('@stdlib/ndarray-base-ctor/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function b(e,r,u){var a,i;if(a=m(r,1),a===null)throw new TypeError(v('0ih37',r));return/^complex/.test(r)&&typeof e=="number"&&(e=[e,0]),o(a)?i=c(r):i=f(r),i(a,0,e),new q(r,a,[],[0],0,u)}s.exports=b
});var l=t();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
