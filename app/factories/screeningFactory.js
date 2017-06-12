( function () {
  angular.module( 'bondApp' )
    .factory( 'screeningFactory', screeningFactory )

  screeningFactory.$inject = ['$http']

  function screeningFactory( $http ) {
    console.log( 'screening factory is loaded' );

    var screening = {}

    // Ajax call to theater_showtimes
    screening.index = function () {
      return $http.get( 'http://localhost:3000/data/theater_showtimes.json' )
    }

    return screening
  }
}() )
