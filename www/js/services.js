angular.module('starter.services', [])

.factory('Recette', function($resource){
      return $resource('http://bonprixtunisie.com/celialib/web/recettes/:id ',{id: '@id'}, {
                          'query': { method:'GET', isArray:true, responseType:'json' },
                           'get': { method:'GET', isArray:false, responseType:'json' }
                        });
    })

.factory('Produit', function($resource){
      return $resource('http://bonprixtunisie.com/celialib/web/produits/ ',{}, {
                          'query': { method:'GET', isArray:true}
        });
    });


