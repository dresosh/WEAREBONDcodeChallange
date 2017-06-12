( function () {
  angular.module( 'bondApp', ['ui.router', 'ngAnimate'] )
    .config( mainRouter )

  function mainRouter( $stateProvider, $urlRouterProvider ) {
    $stateProvider
      .state( 'home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'mainCtrl',
        controllerAs: 'ctrl'
      } )

    $urlRouterProvider.otherwise( '/' )
  }
}() )
