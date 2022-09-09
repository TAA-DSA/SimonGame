let gamePattern = [];
let userClickedPattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];
//console.log(buttonColours);

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  //console.log(randomNumber);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
