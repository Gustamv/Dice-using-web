//instanciando variaveis que geram numeros aleatorios
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//instanciando variaveis que vira a imagem do dado com o numero que foi gerado anteriormente
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// alterando o src no documento html com as variaveis geradas acima
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// condição para imprimir o resultado no texto dependendo dos dados
if(randomNumber1 > randomNumber2) { 
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}