// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Stings 

var passWordkey =[]
var passWord=[]
var lower = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = [1,2,3,4,5,6,7,8,9,0];
var special = ["!","@","#","$","%","^","&","*","_","+","-","=","?","/"];


//create random array
// random intigers -  

var passWordLength = prompt ( " How Long is your password choose between 8 - 128 Characters" );
var addLower= confirm( "Do you need Lower Case letter in Your Password?");
var addUpper= confirm(" Do you need Upper Case Letter in your Password?");
var addNumber= confirm(" Do you need Number in your Password?");
var addSepcial= confirm(" Do you need Secial Character in your Password?");

// add If statment regarding # of Characters 

    if (addLower === true) {
    passWordkey.push("a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    }
    if (addUpper === true) {
    passWordkey.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    }
    if (addNumber === true) {
    passWordkey.push(1,2,3,4,5,6,7,8,9,0);
    }
    if (addSepcial === true) {
    passWordkey.push("!","@","#","$","%","^","&","*","_","+","-","=","?","/");
    }



for (var i = 0; i < passWordLength; i++){
    var randomCount = Math.floor(Math.random() * passWordkey.length );

  passWord.push (passWordkey[randomCount]);
}

//Random Password
console.log(passWord.join(''));
document.write(passWord.join(''));


