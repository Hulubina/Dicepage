var nr = Math.floor(Math.random() * 6 ) + 1;

var imgnr= "images/dice" + nr +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imgnr);
var nr1=Math.floor(Math.random()*6)+1;
var imgnr1="images/dice"+nr1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imgnr1);
if(nr>nr1)
    {
    document.querySelector("h1").innerHTML=("Player 1 win");}
if(nr<nr1){
    document.querySelector("h1").innerHTML=("Player 2 win");}
if(nr===nr1)
   { document.querySelector("h1").innerHTML=("Draw");}