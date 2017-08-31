angular.module("Jeviteca")

    .component("albumsList", {
        templateUrl: "/templates/albumes-list.html",
        controller: ["AlbumsProvider", function(AlbumsProvider){
            var self = this;
            
            self.model = [];
            self.uiStatus = "loading";
            
            //carga de datos
            self.loadData = function(){
                AlbumsProvider.list().then(function (albums) {
                    // si la peticion ha ido bien
                    self.model = albums;
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