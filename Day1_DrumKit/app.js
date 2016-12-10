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
  97: [keyA, 'asset/sounds/bubbles.mp3'],
  115: [keyS, 'asset/sounds/clay.mp3'],
  100: [keyD, 'asset/sounds/corona.mp3'],
  102: [keyF, 'asset/sounds/glimmer.mp3'],
  103: [keyG, 'asset/sounds/moon.mp3'],
  104: [keyH, 'asset/sounds/pinwheel.mp3'],
  106: [keyJ, 'asset/sounds/prism-2.mp3'],
  107: [keyK, 'asset/sounds/squiggle.mp3'],
  108: [keyL, 'asset/sounds/strike.mp3']
}

document.addEventListener('keypress', function(evt){
  console.log(evt.which);
  if (mapping[evt.which]){
    mapping[evt.which][0].classList.add("highlight");
    
    // play sound effect
    var sound = new Howl({
      src: [mapping[evt.which][1]]
    });

    sound.play();
    
    setTimeout(function(){
      mapping[evt.which][0].classList.remove("highlight");
    }, 200);
  }
});