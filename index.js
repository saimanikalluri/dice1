// random number for dice one

var random = Math.floor(Math.random() * 6 + 1)

// document.querySelector(".img1").addEventListener("click",dice1);

// function dice1(){
     if (random === 1){
      document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    else if (random === 2){
      document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if (random === 3){
      document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if (random === 4){
      document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if (random === 5){
      document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    else {
      document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
  // }
// random number for dice two

var random2 = Math.floor(Math.random() * 6 + 1)
if (random2 === 1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if (random2 === 2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if (random2 === 3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if (random2 === 4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if (random2 === 5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else {
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

//
// result of game


if(random === random2){
document.getElementById("p1").innerHTML = "draw!";
}
else if(random < random2){
  document.getElementById("p1").innerHTML = "player2 winner🚩"
}
else{
  document.getElementById("p1").innerHTML = "🚩player1 winner"
}
