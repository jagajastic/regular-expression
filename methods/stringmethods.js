//  import helper functions
var isUpperCase = require('../helper/helpermethods');

// hasVowels, Returns true if the string contains vowels
String.prototype.hasVowels = function() {
  return /[aeiou]/i.test(this);
};

// toUpper, Returns the String in question but with all characters in upper cases as applicable
String.prototype.toUpperChar = function() {
  var caseString = '';
  for (var index = 0; index < this.length; index++) {
    if (/[a-z]/g.test(this[index])) {
      // convert character to upper case using character code
      caseString += String.fromCharCode(this.charCodeAt(index) - 32);
    } else {
      // append the upper case character
      caseString += String.fromCharCode(this.charCodeAt(index));
    }
  }
  return caseString;
};

//  toLower, Returns the String in question but with all characters in their lower cases as applicable
String.prototype.toLower = function() {
  var caseString = '';
  for (var index = 0; index < this.length; index++) {
    if (/[A-Z]/g.test(this[index])) {
      // convert upper case to lower case
      caseString += String.fromCharCode(this.charCodeAt(index) + 32);
    } else {
      //return the case like that(lower)
      caseString += String.fromCharCode(this.charCodeAt(index));
    }
  }
  return caseString;
};

// ucFirst, Returns the String in question but changes the First Character to an Upper case
String.prototype.ucFirst = function() {
  if (/^[a-z]/.test(this)) {
    //change case to uppercase
    return this[0].toUpperChar() + this.slice(1);
  }
  return this[0] + this.slice(1);
};

// isQuestion, Return true if the string is a question (ending with a question mark)
String.prototype.isQuestion = function() {
  // return true if the match the word with preceeding space
  return /\?$/gim.test(this);
};

// listWord, Returns a list of the words in the string, as an Array.
String.prototype.listWords = function() {
  // return all match in an arrray
  return this.match(/(\w|')+/gim);
};

// wordCount, Returns the number of words in the string
String.prototype.wordCount = function() {
  // get the list of word in array, then return the length
  return this.listWords() === null ? 0 : this.listWords().length;
};

// toCurrency, Returns a currency representation of the String
String.prototype.toCurrency = function() {
  //replace the the string of number with the commaa separated number
  return this.replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// fromCurrency, Returns a number representation of the Currency String
String.prototype.fromCurrency = function() {
  // replace comma with no space
  return this.replace(/,/g, '');
};

// inverseCase method, Returns each letter in the string as an inverse of its current case
String.prototype.inverseCase = function() {
  var casedString = '';
  // check if number is uppercase, then append it to casedString variable
  for (var index = 0; index < this.length; index++) {
    if (isUpperCase(this[index])) {
      casedString += this[index].toLower();
    } else {
      casedString += this[index].toUpperChar();
    }
  }
  return casedString;
};

// inverseCase, Returns the letters in alternating cases. It must start with a lower case
String.prototype.alternatingCase = function() {
  var casedString = '';
  // check if string contain special character then return error
  if (/[!]/g.test(this)) {
    return false;
  }
  for (var index = 0; index < this.length; index++) {
    // check if the posiion of string is odd or even
    if (index % 2 !== 0) {
      // change to uppercase
      casedString += this[index].toUpperChar();
    } else {
      // change character to lowercase
      casedString += this[index].toLower();
    }
  }
  return casedString;
};

// numberWords, Returns the numbers in words
String.prototype.numberWords = function() {
  var numberInWords = '';
  //defined number in words
  var arrayOfWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  for (var index = 0; index < this.length; index++) {
    // get the number
    var wordIdex = this[index];
    // if index is undefine, return false
    if (arrayOfWords[wordIdex] === undefined) {
      return false;
    }
    // use the grabbed number as index of the defined number in words
    numberInWords += arrayOfWords[wordIdex] + ' ';
  }
  return numberInWords;
};

// isDigit, Returns true if the string is a digit(one number)
String.prototype.isDigit = function() {
  if (this.length > 1) {
    return false;
  }
  //check if string is a number, return true if it is, else false
  return /^\d/.test(this);
};

//exporting String prototype for method to be access
module.exports = String.prototype;
