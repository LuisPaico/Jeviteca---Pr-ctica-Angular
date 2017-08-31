angular.module("Jeviteca")

    .controller("GenresController", 
    ["$scope", "GenresProvider", function($scope, GenresProvider){
    
    $scope.model = [];
    $scope.uiStatus = "loading";
    
    var promise = GenresProvider.list();
    
    promise.then(
    function(genres){
        // si la peticion ha ido bien
        $scope.model = genres;
        if ($scope.model.length == 0){
            $scope.uiStatus = "empty";
        }else{
            $scope.uiStatus = "ideal";
        }
        
    },
    function(error){
        // si la peticion ha ido mal
        $scope.uiStatus = "error";
        
    });
    
}]);