angular.module("Jeviteca")
.service("BandsProvider", ["$http", "$q", function($http, $q){
    
    return {
        
        list: function(){
            
            var defer = $q.defer();
            
            $http.get("resources/data/bands.json").then(
                
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