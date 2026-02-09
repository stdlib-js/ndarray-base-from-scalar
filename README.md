<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# scalar2ndarray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a scalar value to a zero-dimensional [ndarray][@stdlib/ndarray/base/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-from-scalar@v0.2.3-deno/mod.js';
```

#### scalar2ndarray( value, dtype, order )

Returns a zero-dimensional [ndarray][@stdlib/ndarray/base/ctor] containing a provided scalar `value` and having a specified [data type][@stdlib/ndarray/dtypes].

```javascript
import getShape from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@deno/mod.js';
import getDType from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@deno/mod.js';

var x = scalar2ndarray( 1.0, 'float64', 'row-major' );
// returns <ndarray>

var sh = getShape( x );
// returns []

var dt = String( getDType( x ) );
// returns 'float64'

var v = x.get();
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `value` is a number and [`dtype`][@stdlib/ndarray/dtypes] is a complex [data type][@stdlib/ndarray/dtypes], the function returns a zero-dimensional [ndarray][@stdlib/ndarray/base/ctor] containing a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-from-scalar@v0.2.3-deno/mod.js';

// Get a list of data types:
var dt = dtypes( 'integer_and_generic' );

// Generate zero-dimensional arrays...
var x;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = scalar2ndarray( i, dt[ i ], 'row-major' );
    console.log( x.get() );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-base/ctor`][@stdlib/ndarray/base/ctor]</span><span class="delimiter">: </span><span class="description">base multidimensional array.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-from-scalar.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-from-scalar

[test-image]: https://github.com/stdlib-js/ndarray-base-from-scalar/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/ndarray-base-from-scalar/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-from-scalar/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-from-scalar?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-from-scalar.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-from-scalar/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-from-scalar/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-from-scalar/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-from-scalar/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-from-scalar/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-from-scalar/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-from-scalar/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-from-scalar/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-from-scalar/main/LICENSE

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor/tree/deno

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/deno

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/deno

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
