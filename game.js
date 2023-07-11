var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userChosenColour = "";
var userClickedPattern = [];
var level = 0
var gameStarted = false

var audio1 = new Audio("sounds/green.mp3");
var audio2 = new Audio("sounds/red.mp3");
var audio3 = new Audio("sounds/yellow.mp3");
var audio4 = new Audio("sounds/blue.mp3");
var audio5 = new Audio("sounds/wrong.mp3")
var intervalid1;

document.onkeypress = function (){
if(!gameStarted){
clearInterval(intervalid1)
  document.querySelector("#level-title").innerHTML = `level ${level}`
  intervalid1 = setTimeout(()=>{nextSequence(playSound())},500)
  gameStarted = true
}

  
}

document.querySelector("#green").addEventListener("click", () => {
  audio1.play();
  document.querySelector("#green").classList.add("pressed");
  setTimeout(() => {
    document.querySelector("#green").classList.remove("pressed");
  }, 100);
  userChosenColour = "green";
  userClickedPattern.push(userChosenColour);
  
checkAnswer(userClickedPattern.length-1)
});
document.querySelector("#red").addEventListener("click", () => {
  audio2.play();
  document.querySelector("#red").classList.add("pressed");
  setTimeout(() => {
    document.querySelector("#red").classList.remove("pressed");
  }, 100);
  userChosenColour = "red";
  userClickedPattern.push(userChosenColour);
  
 checkAnswer(userClickedPattern.length-1)
});
document.querySelector("#yellow").addEventListener("click", () => {
  audio3.play();
  document.querySelector("#yellow").classList.add("pressed");
  setTimeout(() => {
    document.querySelector("#yellow").classList.remove("pressed");
  }, 100);
  userChosenColour = "yellow";
  userClickedPattern.push(userChosenColour);
 
  checkAnswer(userClickedPattern.length-1)
});
document.querySelector("#blue").addEventListener("click", () => {
  audio4.play();
  document.querySelector("#blue").classList.add("pressed");
  setTimeout(() => {
    document.querySelector("#blue").classList.remove("pressed");
  }, 100);
  userChosenColour = "blue";
  userClickedPattern.push(userChosenColour);
 
 checkAnswer(userClickedPattern.length-1)
});

const nextSequence = () => {
 userClickedPattern = [];
 level++
 document.querySelector("#level-title").innerHTML = `level ${level}`
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosencolour = buttonColours[randomNumber];
  gamePattern.push(randomChosencolour);
  document.querySelector(`#${randomChosencolour}`).classList.add("pressed");

  setTimeout(() => {
    document
      .querySelector(`#${randomChosencolour}`)
      .classList.remove("pressed");
    }, 100);
   playSound(randomChosencolour)

};

const playSound = (name) =>{
  var audio = new Audio(`sounds/${name}.mp3`)
  audio.play()
}

const checkAnswer = (currentLevel) =>{
 if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
  if (gamePattern.length === userClickedPattern.length)
  {
    setTimeout(()=>{
      nextSequence()
    },1000)
  }
 }
 else {
  audio5.play()
  document.body.classList.add("game-over")
setTimeout(()=>{
  document.body.classList.remove("game-over")
},200)
document.querySelector("#level-title").innerHTML = "Game Over, Press Any key to Restart"
restartGame()
}
}


const restartGame = () =>{

  level = 0
  gamePattern = []
  gameStarted = false 
}


