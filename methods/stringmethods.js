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
      caseString += String.fromCharCode(this.charCodeAt(index) - 32); // convert to upper case using character code
    } else {
      caseString += String.fromCharCode(this.charCodeAt(index)); // return the upper case
    }
  }
  return caseString;
};

//  toLower, Returns the String in question but with all characters in their lower cases as applicable
String.prototype.toLower = function() {
  var caseString = '';
  for (var index = 0; index < this.length; index++) {
    if (/[A-Z]/g.test(this[index])) {
      caseString += String.fromCharCode(this.charCodeAt(index) + 32); // convert upper case to lower case
    } else {
      caseString += String.fromCharCode(this.charCodeAt(index)); //return the case like that(lower)
    }
  }
  return caseString;
};

// ucFirst, Returns the String in question but changes the First Character to an Upper case
String.prototype.ucFirst = function() {
  if (/^[a-z]/.test(this)) {
    return this[0].toUpperChar() + this.slice(1); //change case to uppercase
  }
  return this[0] + this.slice(1);
};

// isQuestion, Return true if the string is a question (ending with a question mark)
String.prototype.isQuestion = function() {
  return /\?$/gim.test(this); // return true if the match the word with preceeding space
};

// listWord, Returns a list of the words in the string, as an Array.
String.prototype.listWords = function() {
  return this.match(/(\w|')+/gim); // return all match in an arrray
};

// wordCount, Returns the number of words in the string
String.prototype.wordCount = function() {
  return this.listWords() === null ? 0 : this.listWords().length; // get the list of word in array, then return the length
};

// toCurrency, Returns a currency representation of the String
String.prototype.toCurrency = function() {
  return this.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}; //replace the the string of number with the commaa separated number

// fromCurrency, Returns a number representation of the Currency String
String.prototype.fromCurrency = function() {
  return this.replace(/,/g, ''); // replace comma with no space
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
      casedString += this[index].toUpperChar(); // change to uppercase
    } else {
      casedString += this[index].toLower(); // change character to lowercase
    }
  }
  return casedString;

  
};

// numberWords, Returns the numbers in words
String.prototype.numberWords = function() {
  var numberWords = '';
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
  ]; //defined number in words
  for (var index = 0; index < this.length; index++) {
    var wordIdex = this[index]; // get the number
    // if index is undefine, return false
    if (arrayOfWords[wordIdex] === undefined) {
      return false;
    }
    numberWords += arrayOfWords[wordIdex] + ' '; // use the grabbed number as index of the defined number in words
  }
  return numberWords;
};

// isDigit, Returns true if the string is a digit(one number)
String.prototype.isDigit = function() {
  if (this.length > 1) {
    return false;
  }
  return /^\d/.test(this); //check if string is a number, return true if it is, else false
};

//exporting String prototype for method to be access
module.exports = String.prototype;
