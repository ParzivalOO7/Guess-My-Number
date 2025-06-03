"use strict";

// ! om secret number te krijgen
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// ! je selecteert de element met zijn classe, daarna add je een event zoals hier een "click" daarna moet je het een function geven
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  // ! senario's als er geen input is, zelfde als secretNumber, hoger dan secretNumber of lager dan secretNumber
  // als er geen input is
  if (!guess) {
    displayMessage("No number 🛑");

    // als je wint
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // als raaden fout is
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "📈 Too high" : "📉 Too low";
      displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game 💀");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// ! again btn implementeren
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
