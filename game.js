let gamePattern = [];
let userClickedPattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];
//console.log(buttonColours);

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  //console.log(randomNumber);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  $("#" + randomChosenColour).on("click", function () {
    let audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    audio.play();
  });

  $(".btn").on("click", function (event) {
    userChosenColour = [];
    userChosenColour.push(event.target.id);
    console.log(userChosenColour);
  });
}

nextSequence();
console.log(gamePattern);
console.log(userClickedPattern);
