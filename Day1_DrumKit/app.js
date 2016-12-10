var keyA = document.querySelector(".key-A");
var keyS = document.querySelector(".key-S");
var keyD = document.querySelector(".key-D");
var keyF = document.querySelector(".key-F");
var keyG = document.querySelector(".key-G");
var keyH = document.querySelector(".key-H");
var keyJ = document.querySelector(".key-J");
var keyK = document.querySelector(".key-K");
var keyL = document.querySelector(".key-L");

var mapping = {
  97: keyA,
  115: keyS,
  100: keyD,
  102: keyF,
  103: keyG,
  104: keyH,
  106: keyJ,
  107: keyK,
  108: keyL
}
document.addEventListener('keypress', function(evt){
  console.log(evt.which);
  if (mapping[evt.which]){
    mapping[evt.which].classList.add("highlight");
    setTimeout(function(){
      mapping[evt.which].classList.remove("highlight");
    }, 200);
  }
})