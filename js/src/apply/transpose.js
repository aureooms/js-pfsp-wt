

var __transpose__ = function ( swap ) {

	return function ( solution , mutation ) {
		swap( solution , mutation , mutation + 1 ) ;
	} ;

} ;

exports.__transpose__ = __transpose__ ;
