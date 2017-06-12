( function () {
  angular.module( 'bondApp' )
    .controller( 'mainCtrl', mainController )

  mainController.$inject = ['moviesFactory','screeningFactory']

  function mainController( moviesFactory, screeningFactory ) {
    console.log( 'controller is loaded' );

    var self = this

    self.movies = []
    self.showtimes = []
    self.times = {}

    // getting data from theater_showtimes
    screeningFactory.index()
      .then( function ( response ) {
        self.showtimes = response.data

        for ( var i = 0; i < self.showtimes.length; i++ ) {
          self.times = self.showtimes[i].showtimes
        }
      } )


    // getting data from movie_metadata
    moviesFactory.index()
      .then( function ( response ) {
        self.movies = response.data

        for ( var i = 0; i < self.movies.length; i++ ) {
          var movieID = self.movies[i].id

          for ( var key in self.times ) {
            var showID = key

            if ( showID === movieID ) {
              self.movies[i].showtimes = self.times[key]
            }
          }
        }

        console.log( self.movies );


      } )


  }
}() )
