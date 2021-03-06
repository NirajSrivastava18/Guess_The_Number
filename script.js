"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "πCorrect Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

console.log((document.querySelector(".number").textContent = secretNumber));
document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //no Input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("βοΈ No number!");

    //player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "πCorrect Number!";
    displayMessage("π Correct Number!");
    // score++;
    // document.querySelector(".score").textContent = score;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'π Too high!' : 'π Too low!';
      displayMessage(guess > secretNumber ? "π Too high!" : "π Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'π₯ You lost the game!';
      displayMessage("π₯ You lost the game!");
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//number is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too High";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector("body").style.backgroundColor = "red";
//       document.querySelector(".score").textContent = 0;
//     }

//     //number is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost the game!";
//       document.querySelector("body").style.backgroundColor = "red";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
