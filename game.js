let gamePattern = [];

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
    userChosenColour = [];
    let audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    audio.play();
  });

  $(".btn").on("click", function (event) {
    console.log(event.click);
  });
}

nextSequence();
console.log(gamePattern);
