// Dice 1

let randomNumber1 = Math.floor(Math.random() * 6 + 1); // random number from 1 to 6

let randomDiceImg = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

let randomImgSource = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);

//Dice 2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

//Winner Selector

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
