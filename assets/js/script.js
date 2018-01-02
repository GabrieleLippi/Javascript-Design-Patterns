(function(){
    var model = {
        initCounter: function() {
            cats = octopus.getCats();
            var counters = [];
            for ( var i = 0; i < cats.length; i ++) {
                counters[i]= 'counter'+i;
            }
            return counters;
        },
        getAllCats: function() {
             return ['Grumpy Cat', 'Keyboard Cat', 'Sofa Cat', 'Brain Cat', 'Fat Cat'];
        },
        getAllCatsImages: function() {
            return ['img/grumpy-cat.jpg','img/cat-keyboard.jpg','img/sofa-cat.jpg','img/brain-cat.jpg','img/fat-cat.jpg']
        }
    };


    var octopus = {
        clearCatDetailsArea: function() {
            return document.getElementById('cat-details').innerHTML = "";
        },

        getCounters: function() {
            return model.initCounter();
        },

        getCats: function() {
            return model.getAllCats();
        },

        getCatsImages: function() {
            return model.getAllCatsImages();
        },

        init: function() {
            model.initCounter();
            listView.init();
        }
    };


    var listView = {
        init: function() {
            this.catsList = document.getElementById("cats-list");
            listView.render();
            catDetails.init();
        },
        render: function(){
            var self = this;
            octopus.getCats().map(function(cat){
                var listElement = document.createElement('li');
                listElement.className = 'list-group-item';
                var listElementText = document.createTextNode(cat);
                listElement.appendChild(listElementText);
                self.catsList.appendChild( listElement );
            });
        }
    };

    var catDetails = {
        init: function() {
            var catList = document.getElementsByClassName("list-group-item");
            for ( var i = 0; i < catList.length; i ++) {
                var index = i;
                var catListElement = catList[i];
                catListElement.addEventListener('click', (function(index){
                    return function() {
                        catDetails.render(index)
                    }
                })(index) );
            }
        },
        render: function(index) {
            octopus.clearCatDetailsArea();
            var catsImages = octopus.getCatsImages();
            var catsNames = octopus.getCats();
            var counters = octopus.getCounters();
            counters[index] = 0;

            var card = document.createElement('div');
            card.className = 'card';
            card.style.width = '20 rem';

            var img = document.createElement('img');
            img.className = 'card-img-top cat-img';
            img.src = catsImages[index];

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var cardTitle = document.createElement('h4');
            cardTitle.className = 'card-title';
            var title = document.createTextNode(catsNames[index]);
            cardTitle.appendChild(title);

            var paragraph = document.createElement('p');
            paragraph.className = 'card-text';
            var paragraphText = document.createTextNode('Click on the image of the cat and see grow the counter counter below!')
            paragraph.appendChild(paragraphText);

            var span = document.createElement('span');
            span.id = 'counter'+index;
            var counterDiv = document.getElementById('counter'+index)

            var button = document.createElement('button');
            button.className = 'alert alert-info';
            var buttonText = document.createTextNode('Button clicked ');
            button.appendChild(buttonText);

            card.appendChild(img)
            card.appendChild(cardBody)
            button.appendChild(span);
            cardBody.appendChild(cardTitle)
            cardBody.appendChild(paragraph)
            cardBody.appendChild(button)
            document.getElementById('cat-details').appendChild(card);

            img.addEventListener('click', function(){
                var counter = counters[index] ++;
                span.innerHTML = counter + ' times';
            })
        }
    };

    octopus.init();
})();
