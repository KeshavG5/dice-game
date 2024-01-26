var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2 + 1);

var randomSource = "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomSource);

if(randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "dice1.png");
}
 else if(randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "dice2.png");
} 
else if(randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "dice3.png");
}
else if(randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "dice4.png");
}
else if(randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src", "dice6.png");
}

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML = "it's a Draw";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
