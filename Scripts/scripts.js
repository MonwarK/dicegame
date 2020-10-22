playerOneDice();
playerTwoDice();

function playerOneDice(){
    var diceValue = Math.floor((Math.random() * 6) + 1);    
    document.querySelector(".dice-one").setAttribute("src","images/dice"+diceValue+".png");
}

function playerTwoDice(){
    var diceValue = Math.floor((Math.random() * 6) + 1);    
    document.querySelector(".dice-two").setAttribute("src","images/dice"+diceValue+".png");
}