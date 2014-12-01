(function(exports, undefined){

	'use strict';


/* js/src/apply */
/* js/src/apply/exchange.js */


var __exchange__ = function ( swap ) {

	return function ( solution , i , j ) {
		swap( solution , i , j ) ;
	} ;

} ;

exports.__exchange__ = __exchange__ ;

/* js/src/apply/insert.js */


var __insert__ = function ( copy ) {

	return function ( solution , i , j ) {

		var tmp , s , a ;

		s = j > i | 0 ;
		a = [ i , j ] ;

		tmp = solution[i] ;

		copy ( solution , a[1-s] + s , a[s] + s , solution , a[1-s] + 1 - s ) ;

		solution[j] = tmp ;


	} ;

} ;

exports.__insert__ = __insert__ ;

/* js/src/apply/transpose.js */


var __transpose__ = function ( swap ) {

	return function ( solution , i , j ) {
		swap( solution , i , j ) ;
	} ;

} ;

exports.__transpose__ = __transpose__ ;

})(typeof exports === 'undefined' ? this['pfsp-wt'] = {} : exports);
