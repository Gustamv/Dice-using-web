
var randomNumer1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumer1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

// metodos diferentes

var randomNumer2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "images/dice" + randomNumer2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2)

if (randomNumer1 > randomNumer2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if (randomNumer1 < randomNumer2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
