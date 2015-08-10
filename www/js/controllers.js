angular.module('starter.controllers', [])

.directive('hideTabs', function($rootScope) {
  return {
      restrict: 'A',
      link: function($scope, $el) {
          $rootScope.hideTabs = 'tabs-item-hide';
          $scope.$on('$destroy', function() {
              $rootScope.hideTabs = '';
          });
      }
  };
})

.controller('DashCtrl', function($scope,$ionicScrollDelegate, Produit) {
  $scope.produits = Produit.query();
  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
  
})

.controller('RecettesCtrl', function($scope, $ionicScrollDelegate, Recette) {
  
  $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };
  $scope.limiter = 8;
  $scope.recettes = Recette.query();

  $scope.increaseLimiter = function() {
       $scope.limiter += 8;
  
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     
  };
})

.controller('RecetteDetailCtrl', function($scope, $stateParams, recette) {
  
  $scope.recette = recette
})
  
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
