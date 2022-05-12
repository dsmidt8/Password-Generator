// Assignment Code
var generateBtn = document.querySelector("#generate");


//variable definitions
let lowerCase = "abcdefghijklmnopqrstuvwqyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWQYZ";
let specialCharacter = "#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let numeric = "1234567890"

// Write password to the #password input
function writePassword() {

  //Ask how long the password needs to be
  var promptLength = window.prompt("How long would you like your password? type a number between 8 and 126");
    //condition for valid numbers
    if (promptLength >=8 && promptLength<=126 ){
      console.log("promptLength", promptLength);
  } else {
    window.alert("you have not picked a valid number, try again"); 
    writePassword ()
  }
  //How to reset if number not valid????

  //lowercase Selector window
  var confirmLowercase = window.confirm("Do you want lower-case letters?");
  if (confirmLowercase){
    console.log("lowercase", lowerCase); window.alert("lowercase letters selected!");
  } else{
    window.alert("Lower case letters NOT selected");
  }

  //Uppercase Selector window
  var confirmUppercase = window.confirm("Do you want Upper-case letters?");
  if (confirmUppercase){
    console.log("Uppercase", upperCase); window.alert("Uppercase letters selected!");
  } else{
    window.alert("Upper case letters NOT selected");
  }
  
  //Numeric selector window
  var confirmNumeric = window.confirm("Do you want Numbers?");
  if (confirmNumeric){
    console.log("numeric", numeric); window.alert("Numbers selected!");
  } else{
    window.alert("Numbers NOT selected");
  }

  //Special Characters window
  var confirmSpecial = window.confirm("Do you want Special Characters");
  if (confirmSpecial){
    console.log("specialCharacter", specialCharacter); window.alert("Special Characters selected!");
  } else{
    window.alert("Special Characters NOT selected");
  }

  var inputConfirm = window.confirm("Are the Listed variables correct" + confirmLowercase + confirmUppercase + confirmNumeric + confirmSpecial);
  if (inputConfirm){}
  else {
    writePassword()
  }
  


  


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





//password generated matches selected criteria
// password in alert or written on page






