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
// data Validation for Previos Prompt
while (passWordLength<8 || passWordLength>128) {
    alert("You need to select length of your password to be between 8 - 128 digits");
    var passWordLength = prompt ( " How Long is your password choose between 8 - 128 Characters" );    
    } 
// Choose elements to be mixed 
var lower=["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number=["1","2","3","4","5","6","7","8","9","0"];
var special=["!","@","#","$","%","^","&","*","_","+","-","=","?","/"];

//  Create Intiger Pool based on Confirmed Value  
while (passWordkey.length<1) {

var addLower= confirm( "Do you need Lower Case letter in Your Password?");
var addUpper= confirm(" Do you need Upper Case Letter in your Password?");
var addNumber= confirm(" Do you need Number in your Password?");
var addSepcial= confirm(" Do you need Secial Character in your Password?");

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
    // data Validation   
if (password.length === 0) {
        alert( "You need to choose at least one  to Generate Password");
    }
}
//create random arry with arry of arrays using 2 random variables


// password Validation 
for (var k = 0; k<passWordkey.length; k++){
    var check = passWordkey[k].some((el) => {
        return password.indexOf(el) !== -1;
    });
}

// check if each arrays of array's in passWordkey is included in password

// return and repeat password generation until check is true
while(check===false) {
    for (var i = 0; i < passWordLength; i++){

        var randomCount = Math.floor(Math.random() * passWordkey.length);
        var randomCount2 = Math.floor(Math.random() * passWordkey[randomCount].length);
    
      password.push (passWordkey[randomCount][randomCount2]);
     
    }
    for (var k = 0; k<passWordkey.length; k++){
        var check = passWordkey[k].some((el) => {
            return password.indexOf(el) !== -1;
        });
        }

if (check===true){
    password=password.join('');
    return(password); 
}else {
    for (var i = 0; i < passWordLength; i++){

        var randomCount = Math.floor(Math.random() * passWordkey.length);
        var randomCount2 = Math.floor(Math.random() * passWordkey[randomCount].length);
    
      password.push (passWordkey[randomCount][randomCount2]);
     
    }
    for (var k = 0; k<passWordkey.length; k++){
        var check = passWordkey[k].some((el) => {
            return password.indexOf(el) !== -1;
        });
        }
        console.log(check)
        
}
}
console.log(check)
// Create New Array for password and join all arrays into one to eliminate " , " when display on document 
}

