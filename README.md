<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Fibonacci

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the nth [Fibonacci number][fibonacci-number].

<section class="intro">

The [Fibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:fibonacci_sequence" align="center" raw="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots" alt="Fibonacci sequence"> -->

<div class="equation" align="center" data-raw-text="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots" data-equation="eq:fibonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/fibonacci/docs/img/equation_fibonacci_sequence.svg" alt="Fibonacci sequence">
    <br>
</div>

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:fibonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2}" alt="Fibonacci sequence recurrence relation"> -->

<div class="equation" align="center" data-raw-text="F_n = F_{n-1} + F_{n-2}" data-equation="eq:fibonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/fibonacci/docs/img/equation_fibonacci_recurrence_relation.svg" alt="Fibonacci sequence recurrence relation">
    <br>
</div>

<!-- </equation> -->

with seed values `F_0 = 0` and `F_1 = 1`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import fibonacci from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fibonacci@deno/mod.js';
```

#### fibonacci( n )

Computes the nth [Fibonacci number][fibonacci-number].

```javascript
var v = fibonacci( 0 );
// returns 0

v = fibonacci( 1 );
// returns 1

v = fibonacci( 2 );
// returns 1

v = fibonacci( 3 );
// returns 2

v = fibonacci( 78 );
// returns 8944394323791464
```

If `n > 78`, the function returns `NaN`, as larger [Fibonacci numbers][fibonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754].

```javascript
var v = fibonacci( 79 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = fibonacci( 3.14 );
// returns NaN

v = fibonacci( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = fibonacci( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import fibonacci from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fibonacci@deno/mod.js';

var v;
var i;

for ( i = 0; i < 79; i++ ) {
    v = fibonacci( i );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/binet`][@stdlib/math/base/special/binet]</span><span class="delimiter">: </span><span class="description">evaluate Binet's formula extended to real numbers.</span>
-   <span class="package-name">[`@stdlib/math/base/special/fibonacci-index`][@stdlib/math/base/special/fibonacci-index]</span><span class="delimiter">: </span><span class="description">compute the Fibonacci number index.</span>
-   <span class="package-name">[`@stdlib/math/base/special/lucas`][@stdlib/math/base/special/lucas]</span><span class="delimiter">: </span><span class="description">compute the nth Lucas number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/negafibonacci`][@stdlib/math/base/special/negafibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth negaFibonacci number.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fibonacci.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fibonacci

[test-image]: https://github.com/stdlib-js/math-base-special-fibonacci/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fibonacci/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fibonacci/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fibonacci?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fibonacci.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fibonacci/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fibonacci/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-fibonacci/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-fibonacci/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-fibonacci/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fibonacci/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/binet]: https://github.com/stdlib-js/math-base-special-binet/tree/deno

[@stdlib/math/base/special/fibonacci-index]: https://github.com/stdlib-js/math-base-special-fibonacci-index/tree/deno

[@stdlib/math/base/special/lucas]: https://github.com/stdlib-js/math-base-special-lucas/tree/deno

[@stdlib/math/base/special/negafibonacci]: https://github.com/stdlib-js/math-base-special-negafibonacci/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
