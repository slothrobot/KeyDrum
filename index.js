/* my way to achieve the click function*/

// function handleClick(){alert("you")};
//  var n = [0,1,2,3,4,5,6];
// for (i of n) {
// document.querySelectorAll("button")[i].addEventListener("click", handleClick);
// };

/* Angela's way to achieve the click function*/

//to make sound once clicked
for (var i = 0; i < document.querySelectorAll(".drum").length; i ++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonClicked= this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}
//to make sound once pressed the corresponding key
  document.addEventListener("keydown", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
}
);
//to simplify the code, the function part is moved below
function makeSound(key){
switch (key) {
  case "w":
    var drumBeat = new Audio("sounds/tom-1.mp3");
    drumBeat.play();
    break;
  case "a":
    var drumBeat = new Audio("sounds/tom-2.mp3");
    drumBeat.play();
    break;
  case "s":
    var drumBeat = new Audio("sounds/tom-3.mp3");
    drumBeat.play();
    break;
  case "d":
    var drumBeat = new Audio("sounds/tom-4.mp3");
    drumBeat.play();
    break;
  case "j":
    var drumBeat = new Audio("sounds/snare.mp3");
    drumBeat.play();
    break;
  case "k":
    var drumBeat = new Audio("sounds/crash.mp3");
    drumBeat.play();
    break;
  case "l":
    var drumBeat = new Audio("sounds/kick-bass.mp3");
    drumBeat.play();
    break;

  default: console.log(key);
}
}

function buttonAnimation(currentKey){
  var buttonFlash = document.querySelector("." + currentKey);
  buttonFlash.classList.add("pressed");
  setTimeout(function (){
    buttonFlash.classList.remove("pressed");
  }, 100 );
}
