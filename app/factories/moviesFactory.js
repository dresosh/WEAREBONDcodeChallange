( function () {
  angular.module( 'bondApp' )
    .factory( 'moviesFactory', moviesFactory )

  moviesFactory.$inject = ['$http']

  function moviesFactory( $http ) {
    console.log( 'movies factory is loaded' );

    var movies = {}

    // Ajax call to movie_metadata
    movies.index = function () {
      return $http.get( 'http://localhost:3000/data/movie_metadata.json' )
    }

    return movies
  }
}() )
