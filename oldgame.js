/***********************************************************/
// ???????
/***********************************************************/
var counter = 0;
var timer;
var start_game = false;


function gamePage() {
  document.getElementById("s_landingP").style.display = "none";
  document.getElementById("s_regP").style.display = "none";
  document.getElementById("s_adminP").style.display = "none";
  document.getElementById("s_gameP").style.display = "block";
  document.getElementById("s_instructionsP").style.display = "none";
}


function xo_setup() {
  console.log('xo_setup')
  var elmnt = document.getElementById("canvasGoesHere");         //creates canvas
  tictactoeGame = createCanvas(elmnt.offsetWidth, elmnt.offsetHeight);
  tictactoeGame.parent(canvasGoesHere);

  var scoreboard = 0;

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
  console.log(b1);
}

function xo_draw() {
}

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
//console.log(wins[1][1]);

i = [0, 1, 2]

/***********************************************************/
// buttonClicked(_num)
// Called by all TicTacToe html buttons
// Shows image O/X based on counter being even/odd then
//   disables the button
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
  //0x
  console.log(document.getElementById(_num + "x").style.display)

}

/***********************************************************/
// win(_symbol)
// Called by all TicTacToe html buttons
// Shows image O/X based on counter being even/odd then
//   disables the button
// Input:  button number
// Return: na/a
/***********************************************************/

function win(_symbol) {
  for (i = 0; i < wins.length; i++) {
    if ((document.getElementById(wins[i][0] + _symbol).style.display) == "block" &&
      (document.getElementById(wins[i][1] + _symbol).style.display) == "block" &&
      (document.getElementById(wins[i][2] + _symbol).style.display) == "block") {
      alert('Player ' + _symbol + ' wins');
      finish();
      scoreboard = scoreboard + 1;
      console.log(scoreboard)
      document.getElementById('p_score').innerHTML = "Wins: " + scoreboard;
    }
  }
}

function finish() {
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


function startTimer() {
  console.log('startTimer')
  interval = setInterval(countdown, 1500);
  start_game = true;
}

function countdown() {                        //timer goes down if 0 game stops 
  if (counter < 61) {
    document.getElementById('p_timer').innerHTML = "Time: " + counter;
    counter++;
  }
  else {
    clearInterval(interval);
    start_game = false;
    fb_readRec(XO, userDetails.uid, highScore, processScore)
  }
}








/***********************************************************/
// END OF APP
/***********************************************************/