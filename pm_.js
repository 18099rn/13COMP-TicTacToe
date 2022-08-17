/*************************************************************
  Written by Ragavi, Term 1 2021
  Program to ??????
    
*************************************************************/
// database variables
var DETAILS = 'userDetails';      //<== FIREBASE PATH NAMES HERE
const ADMIN = 'admin'
const XO = 'scores'

var loginStatus = ' ';
var readStatus = ' ';
var writeStatus = ' ';

//userDetails path
var userDetails = {
  uid: '',
  email: '',
  name: '',
  photoURL: '',
  phone: '',
  age: '',
  uid1: '',
  email1: '',
  name1: '',
  photoURL1: '',
  phone1: '',
  age1: ''
};
//highScore path
var highScore = {
  highScore: 0
}

var dbArray = [];
/*dbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdb*/
console.log('setup;')
fb_initialise();                     // connect to firebase
fb_login(userDetails);
/**************************************************************/
// pm_reg()
// Called by ???
// hides landing page and shows reg page and calls reg setup
// Input:  n/a
// Return: n/a
/**************************************************************/
function pm_reg() {
  console.log('pm_reg')
  document.getElementById("s_landingP").style.display = "none";
  document.getElementById("s_regP").style.display = "block";
  document.getElementById("s_adminP").style.display = "none";
  document.getElementById("s_gameP").style.display = "none";
  document.getElementById("s_instructionsP").style.display = "none";


  reg_setup();
}

/*************************************************************
/*    END OF CODE
*************************************************************/