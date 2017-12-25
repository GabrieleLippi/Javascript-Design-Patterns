var number = 0;
var catImg = document.getElementById("cat");
var counterDiv = document.getElementById("number");
catImg.addEventListener(
  "click",
  function() {
    number++;
    counterDiv.innerHTML = number;
  },
  false
);
