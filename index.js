//test
//alert ("Hello");

//Create a Random Number Challenge 3

var randomNumber1 = (Math.random() * 6); // six faces of the dice.
 randomNumber1 = Math.floor(randomNumber1) + 1; //giving a whole number result.
//alert(randomNumber1);

 var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //dice images display.

//alert(randomDiceImage1);

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomDiceImage1);

var randomNumber2 = (Math.random() * 6);
randomNumber2 = Math.floor(randomNumber2) + 1;
//alert(randomNumber2);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
