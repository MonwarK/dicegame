var dice1Value;
var dice2Value;

playerOneDice();
playerTwoDice();

function playerOneDice(){
    dice1Value = Math.floor((Math.random() * 6) + 1);    
    document.querySelector(".dice-one").setAttribute("src","images/dice"+dice1Value+".png");
}

function playerTwoDice(){
    dice2Value = Math.floor((Math.random() * 6) + 1);    
    document.querySelector(".dice-two").setAttribute("src","images/dice"+dice2Value+".png");
}

if(dice1Value > dice2Value){
    document.querySelector("h1").innerHTML="Player One Wins!";
}
else if(dice1Value < dice2Value){
    document.querySelector("h1").innerHTML="Player Two Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}