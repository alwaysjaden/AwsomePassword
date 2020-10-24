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

function generatePassword() {

// Stings 

var passWordkey =[]
var password=[]
var randomCount=[]


//  Confriming Promts 

var passWordLength = prompt ( " How Long is your password choose between 8 - 128 Characters" );


// add If statment regarding Type of Characters  with 4 Trys
for ( var k=0 ; k<4; k++){
    if (passWordLength<8 || passWordLength>128) {
        alert("You need to select length of your password to be between 8 - 128 digits");
        var passWordLength= prompt("Please re-enter lenght of your password")
    } }


// Choose elements to be mixed 

var lower=["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number=["1","2","3","4","5","6","7","8","9","0"];
var special=["!","@","#","$","%","^","&","*","_","+","-","=","?","/"];

var addLower= confirm( "Do you need Lower Case letter in Your Password?");
var addUpper= confirm(" Do you need Upper Case Letter in your Password?");
var addNumber= confirm(" Do you need Number in your Password?");
var addSepcial= confirm(" Do you need Secial Character in your Password?");

//  Create Intiger Pool based on Confirmed Value  

if (addLower === true) {
    passWordkey.push(lower);
    }
    
if (addUpper === true) {
    passWordkey.push(upper);
    }
if (addNumber === true) {
    passWordkey.push(number);
    }
if (addSepcial === true) {
    passWordkey.push(special);
    }

//create random arry with arry of arrays using 2 random variables

for (var i = 0; i < passWordLength; i++){

    var randomCount = Math.floor(Math.random() * passWordkey.length);

    var randomCount2 = Math.floor(Math.random() * passWordkey[randomCount].length);

  password.push (passWordkey[randomCount][randomCount2]);
}


// Create New Array for password and join all arrays into one to eliminate " , " when display on document 

password=password.join('');
return(password);
}

