/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var fibonacci = require( './../lib' );


// FIXTURES //

var FIBONACCI = require( './../lib/fibonacci.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fibonacci, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative number, the function returns `NaN`', function test( t ) {
	var v;
	var i;

	t.strictEqual( isnan( fibonacci( -3.14 ) ), true, 'returns expected value' );

	for ( i = -1; i > -100; i-- ) {
		v = fibonacci( i );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});

tape( 'if provided positive infinity, the function returns `NaN`', function test( t ) {
	var v = fibonacci( PINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = fibonacci( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a non-integer, the function returns `NaN`', function test( t ) {
	var v = fibonacci( 3.14 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the nth Fibonacci number', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 79; i++ ) {
		v = fibonacci( i );
		t.strictEqual( v, FIBONACCI[ i ], 'returns the '+i+'th Fibonacci number' );
	}
	t.end();
});

tape( 'if provided nonnegative integers greater than `78`, the function returns `NaN`', function test( t ) {
	var i;
	var v;
	for ( i = 79; i < 500; i++ ) {
		v = fibonacci( i );
		t.strictEqual( isnan( v ), true, 'returns expected value when provided ' + i );
	}
	t.end();
});
