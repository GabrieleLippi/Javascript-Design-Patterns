var listElement = document.getElementsByClassName("list-group-item");

var number1=0,number2=0,number3=0,number4=0,number5 = 0;

for ( var i = 0; i < listElement.length; i ++ ) {
    var iterator = i+1;
    list = listElement[i];
    list.addEventListener("click",(function(list,iterator){
        return function() {
            console.log('listElement:',list);
            switch (list.textContent) {
                case 'Grumpy Cat':
                    var cards = document.getElementsByClassName("card");
                    for (var i = 0; i < cards.length; i ++) {
                        cards[i].style.display= "none";
                    }
                    document.getElementById("catWrapper1").style.display = "block";
                    var imgCat = document.getElementById("cat"+iterator);
                    var counterDiv = document.getElementById("counter"+iterator);
                    imgCat.addEventListener("click", function(){
                        number1 ++;
                        counterDiv.innerHTML = number1;
                    }, false)
                    break;
                case 'Keyboard Cat':
                    var cards = document.getElementsByClassName("card");
                    for (var i = 0; i < cards.length; i ++) {
                        cards[i].style.display= "none";
                    }
                    document.getElementById("catWrapper2").style.display = "block";
                    var imgCat = document.getElementById("cat"+iterator);
                    var counterDiv = document.getElementById("counter"+iterator);
                    imgCat.addEventListener("click", function(){
                        number2 ++;
                        counterDiv.innerHTML = number2;
                    }, false)
                    break;
                case 'Sofa Cat':
                    var cards = document.getElementsByClassName("card");
                    for (var i = 0; i < cards.length; i ++) {
                        cards[i].style.display= "none";
                    }
                    document.getElementById("catWrapper3").style.display = "block";
                    var imgCat = document.getElementById("cat"+iterator);
                    var counterDiv = document.getElementById("counter"+iterator);
                    imgCat.addEventListener("click", function(){
                        number3 ++;
                        counterDiv.innerHTML = number3;
                    }, false)
                    break;
                case 'Brain Cat':
                    var cards = document.getElementsByClassName("card");
                    for (var i = 0; i < cards.length; i ++) {
                        cards[i].style.display= "none";
                    }
                    document.getElementById("catWrapper4").style.display = "block";
                    var imgCat = document.getElementById("cat"+iterator);
                    var counterDiv = document.getElementById("counter"+iterator);
                    imgCat.addEventListener("click", function(){
                        number4 ++;
                        counterDiv.innerHTML = number4;
                    }, false)
                    break;
                case 'Fat Cat':
                    var cards = document.getElementsByClassName("card");
                    for (var i = 0; i < cards.length; i ++) {
                        cards[i].style.display= "none";
                    }
                    document.getElementById("catWrapper5").style.display = "block";
                    var imgCat = document.getElementById("cat"+iterator);
                    var counterDiv = document.getElementById("counter"+iterator);
                    imgCat.addEventListener("click", function(){
                        number5 ++;
                        counterDiv.innerHTML = number5;
                    }, false)
                    break;
            }
        }
    })(list,iterator))

}
