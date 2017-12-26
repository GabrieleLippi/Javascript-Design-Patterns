var number1 = 0;
var number2 = 0;
var catImg1 = document.getElementById("cat-1");
var catImg2 = document.getElementById("cat-2");
var counterDiv1 = document.getElementById("number-1");
var counterDiv2 = document.getElementById("number-2");
catImg1.addEventListener(
  "click",
  function() {
    number1++;
    counterDiv1.innerHTML = number1;
  },
  false
);
catImg2.addEventListener(
  "click",
  function() {
    number2++;
    counterDiv2.innerHTML = number2;
  },
  false
);
