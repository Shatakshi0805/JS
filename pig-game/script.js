"use strict";

const dice = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const resetGame = document.querySelector(".btn--new");

// const player1 = document.querySelector(".player--0");
// console.log(player1.contains("player--active"));

let score = 0;
let totalScore = 0;

window.addEventListener("load", function () {
  // console.log('dhghsgdsbdn');

  dice.classList.add("hidden");
});

resetGame.addEventListener("click", function () {
  document.querySelector("#score--0").textContent = 0; //reset total of player 1 to 0
  document.querySelector("#current--0").textContent = 0; //reset current of player 1 to 0

  document.querySelector("#score--1").textContent = 0; //reset total of player 2 to 0
  document.querySelector("#current--1").textContent = 0; //reset current of player 2 to 0
  dice.classList.add("hidden");
});

rollDice.addEventListener("click", function () {
  const random = Math.floor(Math.random() * 6 + 1);
  // console.log(random);

  if (random != 1) {
    score += random;
    document.querySelector("#current--0").textContent = score; //add random val to curr score
  } else {
      //switch player
  }
  // console.log(dice);
  dice.src = `dice-${random}.png`;
  // console.log(dice.src);

  dice.classList.remove("hidden");
});

hold.addEventListener("click", function () {
  if (document.querySelector(".player--0").contains(".player--active")) {
    totalScore = score;
    document.querySelector("#score--0").textContent = totalScore;
    document.querySelector("#current--0").textContent = 0;
    document.querySelector(".player--1").classList.add(".player--active");
  } else {
    totalScore = score;
    document.querySelector("#score--1").textContent = totalScore;
    document.querySelector("#current--1").textContent = 0;
    document.querySelector(".player--0").classList.add(".player--active");
  }
});
