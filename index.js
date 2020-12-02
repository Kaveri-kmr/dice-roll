var randomNumber1=Math.floor(Math.random()*6)+1
var randomNumber2=Math.floor(Math.random()*6)+1
var randomDice="dice"+randomNumber1+".png"
var randomDice1="images/dice"+randomNumber2+".png"
var diceImage="images/"+randomDice
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",diceImage);
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomDice1);

if (randomNumber1>randomNumber2){
         document.querySelector("h1").innerHTML="🚩Player1 won"
}
else if (randomNumber1<randomNumber2){
         document.querySelector("h1").innerHTML="player2 won🚩"
}
else{
         document.querySelector("h1").innerHTML="Draw"
}

