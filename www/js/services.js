angular.module('starter.services', [])

.factory('Recette', function($resource){
      return $resource('http://localhost/celialib/web/recettes/:id ',{id: '@id'}, {
                          'query': { method:'GET', isArray:true, responseType:'json' },
                           'get': { method:'GET', isArray:false, responseType:'json' }
                        });
    })

.factory('Produit', function($resource){
      return $resource('http://localhost/celialib/web/produits/ ',{}, {
                          'query': { method:'GET', isArray:true}
        });
    });


