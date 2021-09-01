
var generateBtn = document.querySelector('#generate');



var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";
var allChar ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUZWXYZ0123456789!#$%&'()*+-./:;<=>?@[\^_`{|}~"

function randomNumberGenerator(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function generatePassword() {

  var length = prompt("How many letters would you like in your password?");

  var includeLowercase = confirm("Do you want lowercase?");

   var includeUppercase = confirm("Do you want uppercase?");

   var includeNumbers = confirm("Do you want numbers?");

   var includeSpecialcharacters = confirm("Do you want special characters?");

  var password = ''



  if (includeLowercase ) {
    var randomIndex = randomNumberGenerator(0, lowercaseChar.length)
    password += lowercaseChar[randomIndex]
  
  }
  if (includeUppercase ) {
    var randomIndex2 = randomNumberGenerator(0, uppercaseChar.length)
    password += uppercaseChar[randomIndex2]

  }
  if (includeNumbers ) {
    var randomIndex3 = randomNumberGenerator(0, numericalChar.length)
    password += numericalChar[randomIndex3]

  }
  if (includeSpecialcharacters ) {
    var randomIndex4 = randomNumberGenerator(0, specialChar.length)
    password += specialChar[randomIndex4]

  }

  var rest =length - password.length

 for(var i= 0; i< rest; i++) {
     console.log(i)
     var randomIndex5 = randomNumberGenerator(0, allChar.length)
   password += allChar[randomIndex5]
 }

 console.log(password);
  return password
}


function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  return;
}
console.log(writePassword);

generateBtn.addEventListener('click', writePassword)
