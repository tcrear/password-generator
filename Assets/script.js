// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = ['a', 'b','c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generatePassword() {
  var lengthOfPassword = prompt("How long do you want your password to be? (8-128)")
  // console.log(lengthOfPassword)
  //Need to think about how to check for if the number of length is less than 8 or greater than 128 for errors
  
  var characterBank = []

  var confirmNum = confirm("Would you like numbers in your password?") //true or false... boolean
  var confirmLower = confirm("Would you like lowercase in your password?")
  var confirmUpper = confirm("Would you like uppercase in your password?")

  if(confirmNum === true) {
    characterBank = characterBank.concat(numbers)
  }
  if(confirmLower === true) {
    characterBank = characterBank.concat(lowercase)
  }

  // console.log(characterBank);
  var randomizedPass = ""

  for(i=0; i<lengthOfPassword; i++){
    var randomIndex = Math.floor(Math.random() * characterBank.length)
    var randomCharacter = characterBank[randomIndex]
    randomizedPass += randomCharacter
    // console.log(randomizedPass)
  }

  return randomizedPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // var password = "Tammie"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);