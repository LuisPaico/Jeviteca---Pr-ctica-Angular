angular.module("Jeviteca")

    .controller("BandsController", 
    ["$scope", "BandsProvider", function($scope, BandsProvider){
    
    $scope.model = [];
    $scope.uiStatus = "loading";
    
    var promise = BandsProvider.list();
    
    promise.then(
    function(bands){
        // si la peticion ha ido bien
        $scope.model = bands;
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