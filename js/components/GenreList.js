angular.module("Jeviteca")

    .component("genresList", {
        templateUrl: "/templates/generos-list.html",
        controller: ["GenresProvider", function(GenresProvider){
            var self = this;
            
            self.model = [];
            self.uiStatus = "loading";
            
            //carga de datos
            self.loadData = function(){
                GenresProvider.list().then(function (genres) {
                    // si la peticion ha ido bien
                    self.model = genres;
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