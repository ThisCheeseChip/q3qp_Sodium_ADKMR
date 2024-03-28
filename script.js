var playerHP, opponentHP, fulllog;
fulllog = ""; // Initialize full log as an empty string
playerHP = 100; // Set player's HP to 100
opponentHP = 100; // Set opponent's HP to 100

// Event listener for the start button
document.getElementById("start-button").addEventListener("click", function() {
  document.getElementById("title-screen").style.display = "none"; // Hide title screen
  document.getElementById("game-screen").style.display = "block"; // Show game screen
});

// Function to mute/unmute audio
function mute(){
  var unmute = document.getElementById("mute").innerHTML; // Get current state of mute button

  // Toggle mute/unmute based on current state
  if (unmute == "UNMUTE AUDIO"){
    document.getElementById("bgm").muted = false; // Unmute audio
    document.getElementById("mute").innerHTML = "MUTE AUDIO"; // Change button text
  }
  else{
    document.getElementById("bgm").muted = true; // Mute audio
    document.getElementById("mute").innerHTML = "UNMUTE AUDIO"; // Change button text
  }
}

// Function to toss a coin
function tossCoin() {
  var first;
  const sides = ["Heads", "Tails"]; // Coin sides
  const result = sides[Math.floor(Math.random() * sides.length)]; // Randomly pick a side
  const toss = document.getElementById("toss").value; // Get user's choice

  // Determine if the user wins or loses
  if (toss === result) {
    document.getElementById("result").innerHTML = "You picked " + toss + ".";
    document.getElementById("result2").innerHTML = "You Win, You go first!";
    var first = true; // User goes first
  }
  else {
    document.getElementById("result").innerHTML = "You picked " + toss +".";
    document.getElementById("result2").innerHTML = "You Lose, Opponent goes first!";
    var first = false; // Opponent goes first
  }

  var invalid2 = document.getElementById("confirm");
  invalid2.removeAttribute("disabled"); // Enable confirm button

  const button = document.getElementById("flip");
  button.setAttribute("disabled", ""); // Disable flip button

  document.getElementById("coinBox").innerHTML = result.charAt(0).toUpperCase() + result.slice(1); // Display result
  return(this.first); // Return who goes first
}

// Function to reset the coin toss
function reset(){
  document.getElementById("result").innerHTML = "You picked _____.";
  document.getElementById("result2").innerHTML = "You ____.";
  document.getElementById("coinBox").innerHTML = " "; // Clear result display

  var invalid2 = document.getElementById("confirm");
  invalid2.setAttribute("disabled", ""); // Disable confirm button

  const button = document.getElementById("flip");
  button.removeAttribute("disabled"); // Enable flip button

  result = " "; // Reset result
  toss = " "; // Reset toss
  first = true; // Reset who goes first
}

// Function to confirm and start the game
function confirm() {
  document.getElementById("fullreset").removeAttribute("disabled"); // Enable full reset button
  var invalid3 = document.getElementById("fullreset");
  var invalid2 = document.getElementById("confirm");
  var invalid4 = document.getElementById("reset");
  invalid2.setAttribute("disabled", ""); // Disable confirm button
  invalid3.removeAttribute("disabled"); // Enable full reset button
  invalid4.setAttribute("disabled", ""); // Disable reset button

  alert("The Game is going to start!"); // Display game start message

  var decide = document.getElementById("result2").innerHTML;

  // Determine who goes first and enable corresponding action button
  if (decide == "You Win, You go first!") {
    var firstmove = document.getElementById("attack");
    firstmove.removeAttribute("disabled"); // Enable attack button
  }
  else{
    var firstmove = document.getElementById("attack");
    var secondmove = document.getElementById("defend");

    firstmove.removeAttribute("disabled"); // Enable attack button
    secondmove.removeAttribute("disabled"); // Enable defend button
  }
}

// Function to simulate opponent's action
function opponentAction(){
  var oppAct = Math.floor(Math.random()*3); // Randomly choose opponent's action
  return (oppAct); // Return opponent's action
}

// Function to calculate damage
function damageCalc(){
  var dmg = Math.floor((Math.random()*4) + 1); // Random damage between 1 and 4
  return dmg; // Return damage value
}

// Function to calculate defense
function defenseCalc(){
  var def = Math.floor((Math.random()*2) + 1); // Random defense between 1 and 2
  return def; // Return defense value
}

// Function to handle player's attack
function playerAttack(opponentHP, playerHP, fulllog){
  var playerAttack = damageCalc(); // Calculate player's attack
  var oppAttack = damageCalc(); // Calculate opponent's attack
  var block = defenseCalc(); // Calculate opponent's defense
  var oppAct = opponentAction(); // Simulate opponent's action

  // Determine the outcome of the attack
  if (oppAct == 0){
    var playerDamage = playerAttack - block; // Calculate player's damage after opponent's defense

    if (playerDamage < 0){
      playerDamage = 0;
    }

    opponentHP = opponentHP - playerDamage; // Update opponent's HP after player's attack

    if (playerDamage != 0){
      script = "The opponent blocked " + block + " damage. You dealt " + playerDamage + " damage." + '\n';
    }
    else {
      script = "The opponent has fully blocked your attack!" + '\n';
    }
   
  }
  else {
    var playerDamage = playerAttack; // Player's attack if opponent doesn't block
    opponentHP = opponentHP - playerAttack; // Update opponent's HP after player's attack
    playerHP = playerHP - oppAttack; // Update player's HP after opponent's counter-attack

    script = "You dealt " + playerDamage + " damage. And you took " + oppAttack + " damage." + '\n';
  }      

  fulllog = script + fulllog; // Update full log
  document.getElementById("log").value = fulllog; // Update log display

  // Update health bars based on HP
  if (playerHP >= 90 && playerHP < 100){
    document.getElementById("health-bar1").style.display = "none";
  }
  // Repeat for other HP ranges...

  // Check for game end conditions
  if(playerHP <= 0){
    // Player loses
    var disable = document.getElementById("attack");
    var disable1 = document.getElementById("defend");
    disable1.setAttribute("disabled", ""); // Disable defend button
    disable.setAttribute("disabled", ""); // Disable attack button

    playerHP = 0; // Set player's HP to 0
    document.getElementById("playerHP").innerHTML = " " + playerHP; // Update player's HP display
    document.getElementById("opponentHP").innerHTML = " " + opponentHP; // Update opponent's HP display
    alert("The game has ended. You LOSE!"); // Display game end message

    script = "The game has ended. You LOSE!" + '\n'; // Update log with game end message
    fulllog = script + fulllog; // Update full log
    document.getElementById("log").value = fulllog; // Update log display
    return(0); // End function
  }

  // Repeat for opponentHP <= 0...

  var secondmove2 = document.getElementById("defend");
  secondmove2.removeAttribute("disabled"); // Enable defend button
  return[opponentHP, playerHP, fulllog]; // Return updated game state
}

// Function to handle player's defense
function playerDefend(){
  // Similar to playerAttack function but for defense
}

// Event listener for attack button
document.getElementById("attack").addEventListener('click', function(){
  // Similar to the defend button event listener
})

// Event listener for defend button
document.getElementById("defend").addEventListener('click', function(){
  // Similar to the attack button event listener
})

// Event listener for full reset button
document.getElementById("fullreset").addEventListener("click", function() {
  // Reset the game to its initial state
});
