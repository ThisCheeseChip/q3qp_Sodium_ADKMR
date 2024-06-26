var playerHP, opponentHP, fulllog; //initializes the values
fulllog = "";
playerHP = 100;
opponentHP = 100;

document.getElementById("start-button").addEventListener("click", function() { //title screen
  document.getElementById("title-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block"; //when clicking a button the game appears and the title screen disappears
});

function mute(){
  var unmute = document.getElementById("mute").innerHTML; //mutes the in-game music

  if (unmute == "UNMUTE AUDIO"){
    document.getElementById("bgm").muted = false;
    document.getElementById("mute").innerHTML = "MUTE AUDIO";
  }
  else{
    document.getElementById("bgm").muted = true;
    document.getElementById("mute").innerHTML = "UNMUTE AUDIO";
  }
}

function tossCoin() {
  var first;
  const sides = ["Heads", "Tails"]; //array of the two sides
  const result = sides[Math.floor(Math.random() * sides.length)]; //calculates the sides
  const toss = document.getElementById("toss").value; 

  if (toss === result) { //compares if you won or lost
    document.getElementById("result").innerHTML = "You picked " + toss + ".";
    document.getElementById("result2").innerHTML = "You Win, You go first!"
    var first = true;
  }
  else {
    document.getElementById("result").innerHTML = "You picked " + toss +".";
    document.getElementById("result2").innerHTML = "You Lose, Opponent goes first!"
    var first = false;
  }

  var invalid2 = document.getElementById("confirm"); //enables the confirm button when clicking the toss coin
  invalid2.removeAttribute("disabled");
 
  const button = document.getElementById("flip"); //disables the flip button when clicking the flip button
  button.setAttribute("disabled", "");

  document.getElementById("coinBox").innerHTML = result.charAt(0).toUpperCase() + result.slice(1);
  return(this.first);
}

function reset(){ //resets the heads or tails
  document.getElementById("result").innerHTML = "You picked _____."; //initializes the text back
  document.getElementById("result2").innerHTML = "You ____.";
  document.getElementById("coinBox").innerHTML = " ";

  var invalid2 = document.getElementById("confirm");
  invalid2.setAttribute("disabled", ""); //when resetting, the confirm button will be disabled

  const button = document.getElementById("flip"); //when resetting, the flip coin button will be enabled
  button.removeAttribute("disabled");
}

function confirm() { //runs game//
  document.getElementById("fullreset").removeAttribute("disabled");
  var invalid3 = document.getElementById("fullreset");
  var invalid2 = document.getElementById("confirm");
  var invalid4 = document.getElementById("reset");
  invalid2.setAttribute("disabled", "");
  invalid3.removeAttribute("disabled");
  invalid4.setAttribute("disabled", "");

  alert("The Game is going to start!");

  var decide = document.getElementById("result2").innerHTML;
 

  if (decide == "You Win, You go first!") {
    var firstmove = document.getElementById("attack");
    firstmove.removeAttribute("disabled");
  }
  else{
    var firstmove = document.getElementById("attack");
    var secondmove = document.getElementById("defend");

    firstmove.removeAttribute("disabled");
    secondmove.removeAttribute("disabled");
  }
}


function opponentAction(){
  var oppAct = Math.floor(Math.random()*3);
  return (oppAct);
}

function damageCalc(){
  var dmg = Math.floor((Math.random()*4) + 1);
  return dmg;
}

function defenseCalc(){
  var def = Math.floor((Math.random()*2) + 1);
  return def;
}

function resetBtn(){

}

function playerAttack(opponentHP, playerHP, fulllog){
  var playerAttack = damageCalc();
  var oppAttack = damageCalc();
  var block = defenseCalc();
  var oppAct = opponentAction();

  if (oppAct == 0){
    var playerDamage = playerAttack - block;

    if (playerDamage < 0){
      playerDamage = 0;
    }

    opponentHP = opponentHP - playerDamage;
   
    if (playerDamage != 0){
      script = "The opponent blocked " + block + " damage. You dealt " + playerDamage + " damage." + '\n';
    }
    else {
      script = "The opponent has fully blocked your attack!" + '\n';
    }
   
  }
  else {
    var playerDamage = playerAttack;
    opponentHP = opponentHP - playerAttack;
    playerHP = playerHP - oppAttack;

    script = "You dealt " + playerDamage + " damage. And you took " + oppAttack + " damage." + '\n';
  }      

  fulllog = script + fulllog;
  document.getElementById("log").value = fulllog;

  if (playerHP >= 90 && playerHP < 100){
    document.getElementById("health-bar1").style.display = "none";
  }
  else if (playerHP >= 80 && playerHP < 90){
    document.getElementById("health-bar2").style.display = "none";
  }
  else if (playerHP >= 70 && playerHP < 80){
    document.getElementById("health-bar3").style.display = "none";
  }
  else if (playerHP >= 60 && playerHP < 70){
    document.getElementById("health-bar4").style.display = "none";
  }
  else if (playerHP >= 50 && playerHP < 60){
    document.getElementById("health-bar5").style.display = "none";
  }
  else if (playerHP >= 40 && playerHP < 50){
    document.getElementById("health-bar6").style.display = "none";
  }
  else if (playerHP >= 30 && playerHP < 40){
    document.getElementById("health-bar7").style.display = "none";
  }
  else if (playerHP >= 20 && playerHP < 30){
    document.getElementById("health-bar8").style.display = "none";
  }
  else if (playerHP >= 10 && playerHP < 20){
    document.getElementById("health-bar9").style.display = "none";
  }
  else {
    document.getElementById("health-bar10").style.display = "none";
  }

  if (opponentHP >= 90 && opponentHP < 100){
    document.getElementById("health-bar11").style.display = "none";
  }
  else if (opponentHP >= 80 && opponentHP < 90){
    document.getElementById("health-bar12").style.display = "none";
  }
  else if (opponentHP >= 70 && opponentHP < 80){
    document.getElementById("health-bar13").style.display = "none";
  }
  else if (opponentHP >= 60 && opponentHP < 70){
    document.getElementById("health-bar14").style.display = "none";
  }
  else if (opponentHP >= 50 && opponentHP < 60){
    document.getElementById("health-bar15").style.display = "none";
  }
  else if (opponentHP >= 40 && opponentHP < 50){
    document.getElementById("health-bar16").style.display = "none";
  }
  else if (opponentHP >= 30 && opponentHP < 40){
    document.getElementById("health-bar17").style.display = "none";
  }
  else if (opponentHP >= 20 && opponentHP < 30){
    document.getElementById("health-bar18").style.display = "none";
  }
  else if (opponentHP >= 1 && opponentHP < 20){
    document.getElementById("health-bar19").style.display = "none";
  }
  else {
    document.getElementById("health-bar20").style.display = "none";
  }

  if(playerHP <= 0){
    var disable = document.getElementById("attack");
    var disable1 = document.getElementById("defend");
    disable1.setAttribute("disabled", "");
    disable.setAttribute("disabled", "");


    playerHP = 0;
    document.getElementById("playerHP").innerHTML = " " + playerHP;
    document.getElementById("opponentHP").innerHTML = " " + opponentHP;
    alert("The game has ended. You LOSE!");

    script = "The game has ended. You LOSE!" + '\n';
    fulllog = script + fulllog;
    document.getElementById("log").value = fulllog;
    return(0);
  }

  if (opponentHP <= 0){
    var disable = document.getElementById("attack");
    var disable1 = document.getElementById("defend");
    disable1.setAttribute("disabled", "");
    disable.setAttribute("disabled", "");

    opponentHP = 0;
    document.getElementById("playerHP").innerHTML = " " + playerHP;
    document.getElementById("opponentHP").innerHTML = " " + opponentHP;
    alert("The game has ended. You WIN!");

    script = "The game has ended. You WIN!" + '\n';
    fulllog = script + fulllog;
    document.getElementById("log").value = fulllog;
    return(0);
  }

  var secondmove2 = document.getElementById("defend");
  secondmove2.removeAttribute("disabled");
  return[opponentHP, playerHP, fulllog];
}

function playerDefend(){
  var oppAttack = damageCalc(); //calculates the damage of the opponent
  var block = defenseCalc(); //calculates the amount of damaged blocked from the opponent

  var oppAct = opponentAction(); //action of the opponent

  if (oppAct == 0){ //defending
    script = "The opponent blocked.... and you too...  " + '\n';
  }
  else { //attacking
    playerHP = playerHP - oppAttack; //reduction of the player's health
    oppAttack = oppAttack - block;

    if(oppAttack < 0){
      oppAttack = 0; //making sure attack will never go negative
    }

    if(oppAttack == 0){
      script = "You have fully blocked the opponent's attack." + '\n'; //fully blocked
    }
    else{
      script = "You blocked " + block + " of the opponent's damage. And you took " + oppAttack + " damage." + '\n';
    }
  }      

  fulllog = script + fulllog; //updating the event log
  document.getElementById("log").value = fulllog; //displaying the event log
  
  //this is the health bar system, basically style.display = "none" here makes the bars disappear
  if (playerHP >= 90 && playerHP < 100){
    document.getElementById("health-bar1").style.display = "none";
  }
  else if (playerHP >= 80 && playerHP < 90){
    document.getElementById("health-bar2").style.display = "none";
  }
  else if (playerHP >= 70 && playerHP < 80){
    document.getElementById("health-bar3").style.display = "none";
  }
  else if (playerHP >= 60 && playerHP < 70){
    document.getElementById("health-bar4").style.display = "none";
  }
  else if (playerHP >= 50 && playerHP < 60){
    document.getElementById("health-bar5").style.display = "none";
  }
  else if (playerHP >= 40 && playerHP < 50){
    document.getElementById("health-bar6").style.display = "none";
  }
  else if (playerHP >= 30 && playerHP < 40){
    document.getElementById("health-bar7").style.display = "none";
  }
  else if (playerHP >= 20 && playerHP < 30){
    document.getElementById("health-bar8").style.display = "none";
  }
  else if (playerHP >= 10 && playerHP < 20){
    document.getElementById("health-bar9").style.display = "none";
  }
  else {
    document.getElementById("health-bar10").style.display = "none";
  }

  if (opponentHP >= 90 && opponentHP < 100){
    document.getElementById("health-bar11").style.display = "none";
  }
  else if (opponentHP >= 80 && opponentHP < 90){
    document.getElementById("health-bar12").style.display = "none";
  }
  else if (opponentHP >= 70 && opponentHP < 80){
    document.getElementById("health-bar13").style.display = "none";
  }
  else if (opponentHP >= 60 && opponentHP < 70){
    document.getElementById("health-bar14").style.display = "none";
  }
  else if (opponentHP >= 50 && opponentHP < 60){
    document.getElementById("health-bar15").style.display = "none";
  }
  else if (opponentHP >= 40 && opponentHP < 50){
    document.getElementById("health-bar16").style.display = "none";
  }
  else if (opponentHP >= 30 && opponentHP < 40){
    document.getElementById("health-bar17").style.display = "none";
  }
  else if (opponentHP >= 20 && opponentHP < 30){
    document.getElementById("health-bar18").style.display = "none";
  }
  else if (opponentHP >= 1 && opponentHP < 20){
    document.getElementById("health-bar19").style.display = "none";
  }
  else {
    document.getElementById("health-bar20").style.display = "none";
  }

  if(playerHP <= 0){ //player loses
    var disable = document.getElementById("attack");
    var disable1 = document.getElementById("defend");
    disable1.setAttribute("disabled", "");
    disable.setAttribute("disabled", "");


    playerHP = 0;
    document.getElementById("playerHP").innerHTML = " " + playerHP;
    document.getElementById("opponentHP").innerHTML = " " + opponentHP;
    alert("The game has ended. You LOSE!");

    script = "The game has ended. You LOSE!" + '\n'; //displays loss event 
    fulllog = script + fulllog;
    document.getElementById("log").value = fulllog;
    return(0); //immediately ends the function
  }
  
  if (opponentHP <= 0){ //opponent loses
    var disable = document.getElementById("attack");
    var disable1 = document.getElementById("defend");
    disable1.setAttribute("disabled", "");
    disable.setAttribute("disabled", "");

    opponentHP = 0;
    document.getElementById("playerHP").innerHTML = " " + playerHP;
    document.getElementById("opponentHP").innerHTML = " " + opponentHP;
    alert("The game has ended. You WIN!");

    script = "The game has ended. You WIN!" + '\n';
    fulllog = script + fulllog; //updates the log
    document.getElementById("log").value = fulllog; //displays the log
    return(0);
  }

  var secondmove2 = document.getElementById("defend");
  secondmove2.removeAttribute("disabled"); //enables the defend button (if player goes first)
  return[opponentHP, playerHP, fulllog]; //returns the values to be looped
}

document.getElementById("attack").addEventListener('click', function(){
  var opHP = document.getElementById("opponentHP");
  var plHP = document.getElementById("playerHP");
  var flog = document.getElementById("log");

  opponentHP = opHP.innerHTML;
  playerHP = plHP.innerHTML;
  fulllog = flog.value;

  [opponentHP, playerHP, fulllog] = playerAttack(opponentHP, playerHP, fulllog);
  document.getElementById("playerHP").innerHTML = " " + playerHP;
  document.getElementById("opponentHP").innerHTML = " " + opponentHP;
})

document.getElementById("defend").addEventListener('click', function(){
  var opHP = document.getElementById("opponentHP");
  var plHP = document.getElementById("playerHP");
  var flog = document.getElementById("log");

  opponentHP = opHP.innerHTML;
  playerHP = plHP.innerHTML;
  fulllog = flog.value;


  [opponentHP, playerHP, fulllog] = playerDefend(opponentHP, playerHP, fulllog);
  document.getElementById("playerHP").innerHTML = " " + playerHP;
  document.getElementById("opponentHP").innerHTML = " " + opponentHP;
})

document.getElementById("fullreset").addEventListener("click", function() {
  // Reset player and opponent HP to 100
  playerHP = 100;
  opponentHP = 100;

  // Clear log
  fulllog = "";
  document.getElementById("log").value = fulllog;

  // Enable toss coin and reset button and disable attack and defend buttons
  document.getElementById("attack").setAttribute("disabled", "");
  document.getElementById("defend").setAttribute("disabled", "");
  document.getElementById("flip").removeAttribute("disabled");
  document.getElementById("reset").removeAttribute("disabled");
  document.getElementById("result").innerHTML = "You picked _____.";
  document.getElementById("result2").innerHTML = "You ____.";
  document.getElementById("coinBox").innerHTML = " ";
  document.getElementById("playerHP").innerHTML = " " + playerHP;
  document.getElementById("opponentHP").innerHTML = " " + opponentHP;

  // Disable the full reset button again
  document.getElementById("fullreset").setAttribute("disabled", "");

  // Resetting the health bar
  document.getElementById("health-bar1").style.display = "block";
  document.getElementById("health-bar2").style.display = "block";
  document.getElementById("health-bar3").style.display = "block";
  document.getElementById("health-bar4").style.display = "block";
  document.getElementById("health-bar5").style.display = "block";
  document.getElementById("health-bar6").style.display = "block";
  document.getElementById("health-bar7").style.display = "block";
  document.getElementById("health-bar8").style.display = "block";
  document.getElementById("health-bar9").style.display = "block";
  document.getElementById("health-bar10").style.display = "block";
  document.getElementById("health-bar11").style.display = "block";
  document.getElementById("health-bar12").style.display = "block";
  document.getElementById("health-bar13").style.display = "block";
  document.getElementById("health-bar14").style.display = "block";
  document.getElementById("health-bar15").style.display = "block";
  document.getElementById("health-bar16").style.display = "block";
  document.getElementById("health-bar17").style.display = "block";
  document.getElementById("health-bar18").style.display = "block";
  document.getElementById("health-bar19").style.display = "block";
  document.getElementById("health-bar20").style.display = "block";
});
