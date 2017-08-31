angular.module("Jeviteca")
    .service("AlbumsProvider", ["$http", "$q", function($http, $q){
        
        return {
            
            list: function(){
                
                var defer = $q.defer();
                
                $http.get("resources/data/albums.json").then(
                    
                    function(response){
                        // si la peticion va bien
                        defer.resolve(response.data);
                        
                    },function(error){
                        // si da error
                        defer.reject(error.data);
                    
                });
                
                return defer.promise;
            }

        };
        
    }]);