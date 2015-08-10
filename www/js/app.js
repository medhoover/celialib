
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl',
        
      }
    }
  })

  .state('tab.recettes', {
      url: '/recettes',
      views: {
        'tab-recettes': {
          templateUrl: 'templates/tab-recettes.html',
          controller: 'RecettesCtrl'
        }
      }
    })
    .state('tab.recette-detail', {
      url: '/recettes/:recetteId',
      views: {
        'tab-recettes': {
          templateUrl: 'templates/recette-detail.html',
          controller: 'RecetteDetailCtrl',
          resolve: {
            recette: function(Recette, $stateParams) { 
              return Recette.get({id:$stateParams.recetteId}).$promise;
            }
          }
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

// Add the 'ionic.service.core' module to your main angular module:
angular.module('test', ['ionic.service.core'])
// Identify App
.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID for the server
    app_id: '11bc2ed5',
    // The API key all services will use for this app
    api_key: '37fdac015a7a4b3d08a9ac1c131d91844476fc3076bb56cf'
  });
}])