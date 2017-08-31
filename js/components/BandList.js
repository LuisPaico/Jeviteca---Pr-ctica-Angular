angular.module("Jeviteca")

    .component("bandsList", {
        templateUrl: "/templates/bandas-list.html",
        controller: ["BandsProvider", function(BandsProvider){
            var self = this;
            
            self.model = [];
            self.uiStatus = "loading";
            
            //carga de datos
            self.loadData = function(){
                BandsProvider.list().then(function (bands) {
                    // si la peticion ha ido bien
                    self.model = bands;
                    if (self.model.length == 0) {
                        // self.uiStatus = "empty";
                    } else {
                        self.uiStatus = "ideal";
                    }
                }, function (error) {
                    // si la peticion ha ido mal
                    self.uiStatus = "error";
                });
            };
            
            // Cargar los datos por primera vez
            self.loadData();
        

        }]
    });