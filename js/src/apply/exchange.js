

var __exchange__ = function ( swap ) {

	return function ( solution , mutation ) {
		swap( solution , mutation[0] , mutation[1] ) ;
	} ;

} ;

exports.__exchange__ = __exchange__ ;
