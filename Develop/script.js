// Assignment Code
var generateBtn = document.querySelector("#generate");


//variable definitions

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "X", "y", "z"];
let upperCase = ["A", "B", "C",  "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//***look up key:value meaning */


// Write password to the #password input
function writePassword() {

  //Ask how long the password needs to be
  var promptLength = window.prompt("How long would you like your password? type a number between 8 and 126");
  //condition for valid numbers
  if (promptLength >= 8 && promptLength <= 126) {
    console.log("promptLength", promptLength);
  } else {
    window.alert("you have not picked a valid number, try again");
    writePassword()
  }


  //lowercase prompt window
  var confirmLowercase = window.confirm("Do you want lower-case letters?");
  if (confirmLowercase) {
    console.log("lowercase", lowerCase);
  } else {
    console.log("Lower case letters NOT selected");
  }

  //Uppercase prompt window
  var confirmUppercase = window.confirm("Do you want Upper-case letters?");
  if (confirmUppercase) {
    console.log("Uppercase", upperCase); 
  } else {
    console.log("Upper case letters NOT selected");
  }

  //Numeric prompt window
  var confirmNumeric = window.confirm("Do you want Numbers?");
  if (confirmNumeric) {
    console.log("numeric", numeric); 
  } else {
    console.log("Numbers NOT selected");
  }

  //Special prompt window
  var confirmSpecial = window.confirm("Do you want Special Characters");
  if (confirmSpecial) {
    console.log("specialCharacter", specialCharacter); 
  } else {
    console.log("Special Characters NOT selected");
  }

  //If no valid option selection, resets password prompts
  if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false){
    window.alert("Please Select a valid option");
    writePassword()
  }


  //object with all options gathered (oject key worked with TA)
  let passwordOptions = {
    ifpasswordLength: promptLength,
    hasLowercase: confirmLowercase,
    hasUppercase: confirmUppercase,
    hasNumeric: confirmNumeric,
    hasSpecial: confirmSpecial,
  }
  


  console.log(passwordOptions);





  





    //random password generation based on selected parameters (https://www.programiz.com/javascript/examples/generate-random-strings : website used as example)  *****why do you use empty quotes and how do you use a for loop******
    let randomPassword= ""
    for (let i = 0; i < promptLength; i++){
      randomPassword= randomPassword + passwordOptions[Math.floor(Math.random() * promptLength)];
    }

    console.log(randomPassword);



  //Does including these take into consideration if they are in console or if they are just listed as variable 
  var password = generatePassword(promptLength, confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial);
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Button triggers propmts
//prompt for length of 8 to 126 characters
//character types prompt includes: 
//  *lowercase, 
//  *uppercase, 
//  *numeric,
//  *special characters
// **DONE** YAYYYY

//*****password generation*****

    // generator reads inputs
    // generator reads length
    //password is put into page / in an alert

//???input should be validated and atleast 1 character must be chosen???


//confirm if selected variables are true

//key is to store values in passOptions variable and use that object to generate password and create text element to show password


//password generated matches selected criteria
// password in alert or written on page






