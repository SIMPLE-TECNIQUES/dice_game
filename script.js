 var n1=Math.floor((Math.random()*6)+1);
var src1="image/dice"+n1+".png";
// alert(src1);
// var name1=prompt("Enter name of player1:");
// var name2=prompt("Enter name of  player2:");
var imgch1 =document.querySelectorAll("img")[0];
imgch1.setAttribute("src",src1);

 var n2=Math.floor((Math.random()*6)+1);
var src2="image/dice"+n2+".png";
// alert(src2);
var imgch2=document.querySelectorAll("img")[1];
imgch2.setAttribute("src",src2);

// return Math.floor(Math.random() * max);

if(n1==n2)
{document.querySelector("h1").innerHTML="Draw";

}
if(n1>n2){
  document.querySelector("h1").innerHTML="player1 wins";

}
if(n1<n2){
  document.querySelector("h1").innerHTML="player2 wins";

}
