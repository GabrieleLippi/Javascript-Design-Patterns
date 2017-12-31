(function(){
    var model = {
        // init: function() {
        //     if (!localStorage.notes) {
        //         localStorage.notes = JSON.stringify([]);
        //     }
        // },
        // add: function(obj) {
        //     var data = JSON.parse(localStorage.notes);
        //     data.push(obj);
        //     localStorage.notes = JSON.stringify(data);
        // },
        getAllCats: function() {
             return ['Grumpy Cat', 'Keyboard Cat', 'Sofa Cat', 'Brain Cat', 'Fat Cat'];
        }
    };


    var octopus = {
        // addNewNote: function(noteStr) {
        //     model.add({
        //         content: noteStr,
        //         date: Date.now(),
        //     });
        //     view.render();
        // },

        getCats: function() {
            return model.getAllCats();
        },

        init: function() {
            // model.init();
            listView.init();
        }
    };


    var listView = {
        init: function() {
            this.catsList = document.getElementById("cats-list");
            listView.render();
        },
        render: function(){
            var self = this;
            octopus.getCats().map(function(cat){
                var listElement = document.createElement('li')
                listElement.className = 'list-group-item'
                var listElementText = document.createTextNode(cat)
                listElement.appendChild(listElementText)
                self.catsList.appendChild( listElement );
            });
        }
    };

    var catDetails = {
    };

    octopus.init();
})();
