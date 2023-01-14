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
    // empty array to hold character options 
    let emptyArr = [];
    // prompt user for length of password, and validate minumum and maximum
    let length = parseInt(prompt("Number of characters (10 - 64):  "));
    if (length < 10 || length > 64){
      length = prompt("Please enter a number between 10 and 64: ");
    }
    // prompt user for character type with confirm method 
    let upperCase = confirm("Include uppercase characters?");
    let lowerCase = confirm("Include lowercase characters?");
    let specialCharacter = confirm("Include special characters?");
    let numeric = confirm("Include numeric characters?");
    
    // add character type arrays to empty array based on user choice 
    if (upperCase){
      emptyArr = emptyArr.concat(upperCasedCharacters);
    }
    
    if (lowerCase){
      emptyArr = emptyArr.concat(lowerCasedCharacters);
    }
    if (specialCharacter){
      emptyArr = emptyArr.concat(specialCharacters);
    }
    if (numeric){
      emptyArr = emptyArr.concat(numericCharacters);
    }
    
    return {length, emptyArr};
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    // use random function to return random number within range of array length, and use this as index 
    return arr[Math.floor(Math.random()*arr.length)];
  }
  
  // Function to generate password with user input
  function generatePassword() {
    // get length and character options array from get password options function
    let {length, emptyArr} = getPasswordOptions()
    // set password as empty
    let pass = "";
    // add characters to password at random up to desired length 
    for (i=0; i < length; i++){
        pass = pass + getRandom(emptyArr);
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