/***********************************************************/
// ttt_game.js
/***********************************************************/
//set counter to 0
var counter = 0;
//set start game to false
var start_game = false;
//make scoreboard 0
var scoreboard = 0; 
var winFlag = false;


//empty array to be filled with the players information
playerArray = [
  {"gameName":userDetails.gameName, "name":userDetails.name, "wins":"", "draws":"", "loss":"", "symbol":"x"
    },
  {"gameName":userDetails.gameName1, "name":userDetails.name, "wins":"", "draws":"", "loss":"", "symbol":"o"
    },
]

playerNum = 0

var x
var o


/***********************************************************/
// gamePage
// Called by Start Game button
// Shows game page and hides all other pages
// Input:  na/a
// Return: na/a
/***********************************************************/
function gamePage() {
  document.getElementById("s_landingP").style.display = "none";
  document.getElementById("s_regP").style.display = "none";
  document.getElementById("s_adminP").style.display = "none";
  document.getElementById("s_gameP").style.display = "block";
  document.getElementById("s_instructionsP").style.display = "none";
  playerDetails();
}

// assigns each button with an id
function xo_setup() {
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("button0");
b2 = document.getElementById("button1");
b3 = document.getElementById("button2");
b4 = document.getElementById("button3");
b5 = document.getElementById("button4");
b6 = document.getElementById("button5");
b7 = document.getElementById("button6");
b8 = document.getElementById("button7");
b9 = document.getElementById("button8");
//console.log(b1);
}

//all the combinations for winning
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/***********************************************************/
// buttonClicked(_num)
// Called by all TicTacToe html buttons
// Shows image O/X based on counter being even/odd then
// disables the button
// Input:  button number
// Return: na/a
/***********************************************************/
function buttonClicked(_num) {
  console.log("buttonClicked: _num = " + _num);
  var btnObj = document.getElementById("button" + _num);
  btnObj.disabled = true;
  counter++
  if (counter % 2 == 0) {
    document.getElementById(_num + "o").style.display = 'block';
    win("o")
    //
  } else {
    document.getElementById(_num + "x").style.display = 'block';
    win("x");

  }
  console.log("buttonClicked: counter = " + counter);
  console.log(document.getElementById(_num + "x").style.display)
}

/***********************************************************/
// win(_symbol)
// Called by all TicTacToe html buttons
// Disables button when clicked if 3 in a row then 
// winner is announced if all buttons get pressed 
// then draw is announced
// Input:  button symbol
// Return: na/a
/***********************************************************/
function win(_symbol) {
  console.log("win: _symbol = " + _symbol + "  counter = " + counter);
  
  for (i = 0; i < wins.length; i++) {
    if ((document.getElementById(wins[i][0] + _symbol).style.display) == "block" &&
      (document.getElementById(wins[i][1] + _symbol).style.display) == "block" &&
      (document.getElementById(wins[i][2] + _symbol).style.display) == "block") {
      winFlag = true;
      alert('Player ' + _symbol + ' wins');
       scoreboard = scoreboard + 1;
      console.log(scoreboard)
      document.getElementById('p_wins1').innerHTML = "Wins: " + 
      scoreboard;
      finish();
      console.log("win on 9")
    } 
  }
  console.log("win end: _symbol = " + _symbol);
  if (winFlag == false && counter == 9) {
    alert('Game is a draw!');
  }
}

let sorted Players 



/***********************************************************/
// finish
// Called by win(_symbol)
// Disable all buttons
// Input:  na/a
// Return: na/a
/***********************************************************/
function finish() {
  console.log("finish:");
  
  document.getElementById("button0").disabled = true;
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button4").disabled = true;
  document.getElementById("button5").disabled = true;
  document.getElementById("button6").disabled = true;
  document.getElementById("button7").disabled = true;
  document.getElementById("button8").disabled = true; 
}

/***********************************************************/
// playerDetails
// Disable players name and gamename
// Called by gamePage();
// Input:  gamename
// Return: name and gamename
/***********************************************************/
function playerDetails() {
  console.log(userDetails.name)
  console.log(userDetails.gameName)
  document.getElementById("p_name1").innerHTML = userDetails.name;
  document.getElementById("p_gameName1").innerHTML = userDetails.gameName;

  console.log(userDetails.name1)
  console.log(userDetails.gameName1)
  document.getElementById("p_name2").innerHTML = userDetails.name1;
  document.getElementById("p_gameName2").innerHTML = userDetails.gameName1;
 }
  
/***********************************************************/
// END OF APP
/***********************************************************/