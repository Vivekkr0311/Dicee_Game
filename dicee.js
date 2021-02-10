var player_1 = prompt("Enter first player name !");
var player_2 = prompt("Enter second player name !");

var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

var image_source1 = "images/dice" + randomNumber1+".png";
var image_source2 = "images/dice" + randomNumber2+".png";


document.querySelectorAll(".dice")[0].lastElementChild.setAttribute("src", image_source1);
document.querySelectorAll(".dice")[1].lastElementChild.setAttribute("src", image_source2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".container").firstElementChild.innerHTML = player_1 + " won !";
}else if(randomNumber2 > randomNumber1){
    document.querySelector(".container").firstElementChild.innerHTML = player_2 + " won !";
}else{
    document.querySelector(".container").firstElementChild.innerHTML = "Draw !";
}