angular.module("Jeviteca")
.service("GenresProvider", ["$http", "$q", function($http, $q){
    
    return {
        
        list: function(){
            
            var defer = $q.defer();
            
            $http.get("resources/data/genres.json").then(
                
                function(response){
                    // si la peticion va bien
                    defer.resolve(response.data);
                    console.log(response.data)
                    
                },function(error){
                    // si da error
                    defer.reject(error.data);
                
            });
            
            return defer.promise;
        }

    };
    
}]);