/** @license Apache-2.0 */

'use strict';

/**
* Determine if an array is column-major contiguous.
*
* @module @stdlib/ndarray-base-assert-is-column-major-contiguous
*
* @example
* var isColumnMajorContiguous = require( '@stdlib/ndarray-base-assert-is-column-major-contiguous' );
*
* var shape = [ 2, 2 ];
* var strides = [ 1, 2 ];
* var offset = 0;
*
* var bool = isColumnMajorContiguous( shape, strides, offset );
* // returns true
*
* @example
* var isColumnMajorContiguous = require( '@stdlib/ndarray-base-assert-is-column-major-contiguous' );
*
* var shape = [ 2, 2 ];
* var strides = [ 1, -2 ];
* var offset = 2;
*
* var bool = isColumnMajorContiguous( shape, strides, offset );
* // returns false
*
* @example
* var isColumnMajorContiguous = require( '@stdlib/ndarray-base-assert-is-column-major-contiguous' );
*
* var shape = [ 2, 2 ];
* var strides = [ 2, 2 ];
* var offset = 0;
*
* var bool = isColumnMajorContiguous( shape, strides, offset );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
