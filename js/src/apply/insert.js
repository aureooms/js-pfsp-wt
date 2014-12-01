

var __insert__ = function ( copy ) {

	return function ( solution , mutation ) {

		var tmp , i , j , s , a ;

		i = mutation[0] ;
		j = mutation[1] ;

		s = j > i | 0 ;
		a = [ i , j ] ;

		tmp = solution[i] ;

		copy ( solution , a[1-s] + s , a[s] + s , solution , a[1-s] + 1 - s ) ;

		solution[j] = tmp ;


	} ;

} ;

exports.__insert__ = __insert__ ;
