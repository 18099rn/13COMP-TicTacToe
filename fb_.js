/**************************************************************/
// fb_io.js
// Written by Ragavi   2021
/**************************************************************/

/**************************************************************/
// fb_initialise()
// Called by setup
// Initialize firebase
// Input:  n/a
// Return: n/a
/**************************************************************/
function fb_initialise() {
  console.log('fb_initialise: '); 

  var firebaseConfig = {
    apiKey: "AIzaSyBnkh7y1jyBFP8oL9cUzMDAwNXvKblCd5o",
    authDomain: "comp-2022-ragavi-niranjan.firebaseapp.com",
    databaseURL: "https://comp-2022-ragavi-niranjan-default-rtdb.firebaseio.com",
    projectId: "comp-2022-ragavi-niranjan",
    storageBucket: "comp-2022-ragavi-niranjan.appspot.com",
    messagingSenderId: "978666303166",
    appId: "1:978666303166:web:735258cf3288e9bf75b8ef",
    measurementId: "G-0676YZCM2G"
    /*
    apiKey: "AIzaSyCKvsk60hsXpETKtIJTVkH0IY2kJUiipLo",
    authDomain: "comp-2021-ragavi-niranjan.firebaseapp.com",
    projectId: "comp-2021-ragavi-niranjan",
    storageBucket: "comp-2021-ragavi-niranjan.appspot.com",
    messagingSenderId: "628571035690",
    appId: "1:628571035690:web:5411bd993aa73c65958b53",
    measurementId: "G-WGB6XFB9VS"
    */
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  database = firebase.database();
}

/**************************************************************/
// fb_login(_dataRec)
// Login to Firebase
// Input:  to store user info in
// Return: n/a
/**************************************************************/
function fb_login(_dataRec) {
  console.log('fb_login: dataRec= ' + _dataRec);
  firebase.auth().onAuthStateChanged(newLogin);

  function newLogin(user) {
    if (user) {
      // user is signed in
      _dataRec.uid = user.uid;
      _dataRec.email = user.email;
      _dataRec.name = user.displayName;
      _dataRec.photoURL = user.photoURL;
      loginStatus = 'logged in'; 
      //pm_reg();     
      //read userDetail record
      fb_readRec(DETAILS, user.uid, _dataRec, processDetails)
       
    }
    else {
      // user NOT logged in, so redirect to Google login
      _dataRec = {};
      loginStatus = 'logged out';
      console.log('fb_login: status = ' + loginStatus);

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider); 
    }
  }
}

/**************************************************************/
// fb_logout()
// Logout of Firebase
// Input:  n/a
// Return: n/a
/**************************************************************/
function fb_logout() {
  console.log('fb_logout: ');  
  firebase.auth().signOut();
}

/**************************************************************/
// fb_writeRec(_path, _key, _data)
// Write a specific record & key to the DB
// Input:  path to write to, the key, data to write
// Return: 
/**************************************************************/
function fb_writeRec(_path, _key, _data) {
  console.log('fb_WriteRec: path= ' + _path + '  key= ' + _key +
    '  data= ' + _data.phone);

  writeStatus = 'waiting';
  firebase.database().ref(_path + '/' + _key).set(_data,
    function (error) {
      if (error) {
        writeStatus = 'failure';
        console.log(error);e
      }
      else {
        writeStatus = 'OK';
        console.log("fb_writeRec: OK")
      }
    });

  console.log("fb_writeRec: exit") 
}

/**************************************************************/
// fb_readAll(_path, _data)
// Read all DB records for the path
// Input:  path to read from and functuion to process it
// Return:
/**************************************************************/
function fb_readAll(_path, _processFunc) {
  console.log('fb_readAll: path= ' + _path);

  readStatus = "waiting";
  firebase.database().ref(_path).on("value", gotRecord, readErr);

  function gotRecord(snapshot) {
    let dbData = snapshot.val();
    if (dbData == null) {
      readStatus = "no record";
    }
    else {
      readStatus = "OK";
      console.log(dbData);
    }
    _processFunc(readStatus, snapshot);
  }

  function readErr(error) {
    readStatus = "fail";
    console.log(error);
  }
}

/**************************************************************/
// fb_readRec(_path, _key, _data)
// Read a specific DB record
// Input:  path & key of record to read, where to save it and 
//         function to process the data
// Return:  
/**************************************************************/
function fb_readRec(_path, _key, _data, _processData) {
  console.log('fb_readRec: path= ' + _path + '  key= ' + _key);

  readStatus = "waiting";
  firebase.database().ref(_path + '/' + _key).on("value", gotRecord, readErr);

  function gotRecord(snapshot) {
    let dbData = snapshot.val();
    if (dbData == null) {
      readStatus = "no record";
    }
    else {
      readStatus = "OK";
    }
    _processData(readStatus, dbData, _data)
  }

  function readErr(error) {
    readStatus = "fail";
    console.log(error);
  }
}

/**************************************************************/
// processDetails(_result, _dbData, _data)
// Called by fb_readRec
// If the user is registerd shows game page else calls pm reg
// Input:  ????
// Return: n/a
/**************************************************************/
function processDetails(_result, _dbData, _data) {
  if (_result == 'OK') {
    document.getElementById("s_landingP").style.display = "none";
    document.getElementById("s_instructionsP").style.display = "block";
    document.getElementById("s_gameP").style.display = "none";
    document.getElementById("s_adminP").style.display = "none";
    document.getElementById("s_regP").style.display = "none";

    _data.gameName = _dbData.gameName 
    _data.gameName1 = _dbData.gameName1
    fb_readRec(ADMIN, userDetails.uid, userDetails, processAdmin)
    fb_readRec(ADMIN, userDetails.uid1, userDetails, processAdmin)
    xo_setup();    
  }
  else {
    pm_reg(); 
  }
}

/**************************************************************/
// processAdmin()
// Called ???
// If the user is admin show admin page
// Input:  n/a
// Return: n/a
/**************************************************************/
function processAdmin(_result, _data) {
  console.log('processAdmin: result = ' + _result)
  if (_result == 'OK') {
    document.getElementById("b_lpAdmin").style.display = "block";
  }
}

function processXoscore(_result, _data) {
  if (_result == 'OK') {
    document.getElementById("s_adminP").innerHTML = 99; 
  }
}

/**************************************************************/
// processScore()
// Called by fb_readRec
// If the user gets a new high score update high score
// Input:  n/a
// Return: n/a
/**************************************************************/
function processScore(_result, _data) {
  console.log('processScore: result = ' + _result)
  if (_result == 'OK') {
      fb_writeRec(XO, userDetails.uid1, { highScore: scoreboard })
  }
}

/**************************************************************/
//    END OF MODULE
/**************************************************************/