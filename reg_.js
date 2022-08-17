/**************************************************************/
// registration.js
//
// Test registration page
// Written by Ragavi based on Mr Bob's code 2021
// v01 Initial code

/**************************************************************/

/*************************************************************          //<=======
  TO IMPLIMENT THE REGISTRATION FEATURE:                                //<=======
    1. Copy the style.css into your style.css &                         //<=======
         DELETE the  display: block;  line.                             //<=======
    2. Copy parts of index.html into your index.html as outlined in     //<=======
         the index.html.                                                //<=======
    3. Create a ???????.js module in your project &                     //<=======
         copy the contents of this file into it.                        //<=======
    4. Taylor your ???????.js to fit your program code by looking       //<=======
         at lines ending with  //<=======                               //<=======
    5. Create an images folder in your project.                         //<=======
    6. Download this project to your computer, extract all the          //<=======
         files from the zipped folder.                                  //<=======
    7. Upload all the images to you projects images folder.             //<=======
*************************************************************/          //<=======
function reg_setup() {
  console.log("reg_setup");
  // Save name & email into the form
  // ENSURE THE OBJECT NAME IS CORRECT; its currently userDetails       //<======= 
  document.getElementById("p_regName").innerHTML = userDetails.name    //<=======    
  document.getElementById("p_regEmail").innerHTML = userDetails.email

 document.getElementById("p_regName").innerHTML = userDetails.name1    //<=======    
  document.getElementById("p_regEmail").innerHTML = userDetails.email1
  //<=======   

}

/**************************************************************/
// reg_regDetailsEntered()
// Input event; called when user clicks ?????????? button               //<========
// Write user's details to DB
// Input:   
// Return:
/**************************************************************/
function reg_regDetailsEntered() {
  console.log('reg_regDetailsEntered'); 

  // Save player1's details from the form into your details object
  //  ENSURE THE OBJECT NAME THE PROGRAM SAVES TO IS CORRECT; 
  //    its currently details                                           //<======= 
  //<=======
  userDetails.gameName = (reg_getFormItemValue("f_reg", 0));
  userDetails.phone = Number(reg_getFormItemValue("f_reg", 1));
  userDetails.gender = (reg_getFormItemValue("f_reg", 2));
  userDetails.age = Number(reg_getFormItemValue("f_reg", 3));

  userDetails.gameName1 = (reg_getFormItemValue("f_reg", 0));
  userDetails.phone1 = Number(reg_getFormItemValue("f_reg", 1));
  userDetails.gender1 = (reg_getFormItemValue("f_reg", 2));
  userDetails.age1 = Number(reg_getFormItemValue("f_reg", 3));


  console.table(userDetails);
  if (document.getElementById('f_reg').checkValidity()) {
    fb_writeRec(DETAILS, userDetails.uid, userDetails.uid1, userDetails);
    //changes page from reg page to game page         //<=======
    document.getElementById("s_regP").style.display = "none";
    document.getElementById("s_instructionsP").style.display = "block";
    document.getElementById("s_gameP").style.display = "none";
    document.getElementById("s_adminP").style.display = "none";
    xo_setup(); 
  }
}

/**************************************************************/
// reg_getFormItemValue(_elementId, _item)
// Called by reg_regDetailsEntered
// Returns the value of the form's item
// Input:  element id & form item number
// Return: form item's value
/**************************************************************/
function reg_getFormItemValue(_elementId, _item) {
  //console.log('reg_getFormItemValue: _elementId=' + _elementId +
  //	  ',  _item= ' + _item);

  return document.getElementById(_elementId).elements.item(_item).value;
}

/**************************************************************/
//    END OF PROG
/**************************************************************/