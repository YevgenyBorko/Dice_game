let randomNumber1 = Math.round(Math.random()*5)+1;
let randomNumber2 = Math.round(Math.random()*5)+1;

let result = "";


let dice1 = "images/dice"+randomNumber1+".png";
let dice2 = "images/dice"+randomNumber2+".png";

if (randomNumber1 === randomNumber2)
{
    result = "Draw!";
}
else if (randomNumber1 > randomNumber2)
{
    result = "🚩Player 1 Wins!";
}
else
{
    result = "Player 2 Wins!🚩";
}

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);
document.querySelector("h1").innerHTML = result;
