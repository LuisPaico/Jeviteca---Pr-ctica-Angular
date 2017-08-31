angular.module("Jeviteca")

    .controller("AlbumsController", 
    ["$scope", "AlbumsProvider", function($scope, AlbumsProvider){
    
    $scope.model = [];
    $scope.uiStatus = "loading";
    
    var promise = AlbumsProvider.list();
    
    promise.then(
    function(albums){
        // si la peticion ha ido bien
        $scope.model = albums;
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