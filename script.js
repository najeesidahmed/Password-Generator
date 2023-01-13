// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    let emptyArr = [];
    var length = parseInt(prompt("Number of characters (10 - 64):  "));
    if (length < 10 || length > 64){
      length = prompt("Please enter a number between 10 and 64: ");
    }
    let upperCase = prompt("Include uppercase characters? Enter yes or no: ").toLowerCase();
    let lowerCase = prompt("Include lowercase characters? Enter yes or no: ").toLowerCase();
    let specialCharacter = prompt("Include special characters? Enter yes or no: ").toLowerCase();
    let numeric = prompt("Include numeric characters? Enter yes or no: ").toLowerCase();
  
    if (upperCase == "yes"){
      emptyArr = emptyArr.concat(upperCasedCharacters);
    }
    if (lowerCase == "yes"){
      emptyArr = emptyArr.concat(lowerCasedCharacters);
    }
    if (specialCharacter == "yes"){
      emptyArr = emptyArr.concat(specialCharacters);
    }
    if (numeric == "yes"){
      emptyArr = emptyArr.concat(numericCharacters);
    }
  
    return [length, emptyArr];
    
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    // use random function to return random number within range of array length, and use this as index 
    return arr[Math.floor(Math.random()*arr.length)];
  }
  
  // Function to generate password with user input
  function generatePassword() {
    let l = getPasswordOptions()[0];
    let charOptions = getPasswordOptions()[1];
    let pass = "";
    for (i=0; i < l; i++){
        pass = pass + getRandom(charOptions);
    }
    return pass;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);