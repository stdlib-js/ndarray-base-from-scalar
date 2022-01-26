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

'use strict';

// MODULES //

var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var buffer = require( '@stdlib/ndarray-base-buffer' );
var ndarray = require( '@stdlib/ndarray-base-ctor' );


// MAIN //

/**
* Returns a zero-dimensional ndarray containing a provided scalar value.
*
* @param {*} value - scalar value
* @param {string} dtype - output array data type
* @throws {TypeError} second argument must be a recognized data type
* @returns {ndarray} ndarray
*
* @example
* var x = scalar2ndarray( 1.0, 'float64' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns []
*
* var dt = x.dtype;
* // returns 'float64'
*
* var v = x.get();
* // returns 1.0
*/
function scalar2ndarray( value, dtype ) {
	var buf;
	var o;

	buf = buffer( dtype, 1 );
	if ( buf === null ) {
		throw new TypeError( 'invalid argument. Second argument must be a recognized data type. Value: `' + dtype + '`.' );
	}
	if ( /^complex/.test( dtype ) && typeof value === 'number' ) {
		value = [ value, 0.0 ]; // note: we're assuming that the ComplexXXArray setter accepts an array of interleaved real and imaginary components
	}
	o = arraylike2object( buf );
	o.setter( buf, 0, value );
	return new ndarray( dtype, buf, [], [ 0 ], 0, 'row-major' );
}


// EXPORTS //

module.exports = scalar2ndarray;
