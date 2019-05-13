//  import helper functions
const { isUpperCase, isLowerCase } = require('../helper/helpermethods');

// hasVowels, Returns true if the string contains vowels
String.prototype.hasVowels = function () {
    let regexPattern = /[aeiou]/; // pattern to match only words that contains vowels
    let resultOfCheck = regexPattern.test(this); // return true if match is found else false
    return resultOfCheck;
}

// toUpper, Returns the String in question but with all characters in upper cases as applicable
String.prototype.toUpper = function () {
    var caseString = "";
    for (i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 96 && this.charCodeAt(i) < 123) {
            caseString += String.fromCharCode(this.charCodeAt(i) - 32); // convert to upper case using character code
            continue;
        }
        caseString += String.fromCharCode(this.charCodeAt(i)); // return the upper case
    }
    return caseString;
}

//  toLower, Returns the String in question but with all characters in their lower cases as applicable
String.prototype.toLower = function () {
    var caseString = "";
    for (index = 0; index < this.length; index++) {
        if (this.charCodeAt(index) > 64 && this.charCodeAt(index) < 91) {
            caseString += String.fromCharCode(this.charCodeAt(index) + 32); // convert upper case to lower case 
            continue;
        }
        caseString += String.fromCharCode(this.charCodeAt(index)); //return the case like that(lower)
    }
    return caseString;
}

// ucFirst, Returns the String in question but changes the First Character to an Upper case
String.prototype.ucFirst = function () {
    let regexPattern = /^[a-z]/, resultOfCheck = regexPattern.test(this); //regex pattern, and test to match a-z character(lowercase)
    let remainChar = this.slice(1); // remove first item from the string and return the rest string
    if (resultOfCheck) {
        return (this[0].toUpper()) + remainChar; //change case to uppercase
    }
    return (this[0] + remainChar);
}

// isQuestion, Return true if the string is a question (ending with a question mark)
String.prototype.isQuestion = function () {
    let regexPattern = /\b[\w\s]+\b[?]$/, resultOfCheck = regexPattern.test(this); // return true if the match the word with preceeding space
    return resultOfCheck;
}

// listWord, Returns a list of the words in the string, as an Array.
String.prototype.listWords = function () {
    let regexPattern = /\b(\w|')+\b/gim, resultOfCheck = this.match(regexPattern); // return all match in an arrray
    return resultOfCheck;
}

// wordCount, Returns the number of words in the string
String.prototype.wordCount = function () {
    let arrayOfWords = this.listWords(), wordCount = (arrayOfWords == null) ? 0 : arrayOfWords.length; // get the list of word in array, then return the length
    return wordCount;
}

// toCurrency, Returns a currency representation of the String
String.prototype.toCurrency = function () {
    let regExPattern = /\d(?=(\d{3})+\.)/g; // regex pattern to match either 1decimal or more than one decimal place
    let replacer = '$&,'; //add comma after a decimal number
    return this.replace(regExPattern, replacer);  //replace the the string of number with the commaa separated number 
}

// fromCurrency, Returns a number representation of the Currency String
String.prototype.fromCurrency = function () {
    let regExPattern = /,/g; //pattern to match comma
    return this.replace(regExPattern, ''); // replace comma with empty
}

// inverseCase method, Returns each letter in the string as an inverse of its current case
String.prototype.inverseCase = function () {
    let casedString = "";
    for (let index = 0; index < this.length; index++) {
        if (isUpperCase(this[index])) { // check if number is uppercase, then append it to casedString variable
            let char = this[index].toLower();
            casedString += char;
            continue;
        }
        let char = this[index].toUpper(); // change an upper case character to lowercase
        casedString += char;
    }
    return casedString;
}

// inverseCase, Returns the letters in alternating cases. It must start with a lower case
String.prototype.alternatingCase = function () {
    if (/[!]/g.test(this)) { // check if string contain special character then return error
        return 'you test contain special character!';
    }
    let casedString = '';
    for (let index = 0; index < this.length; index++) {
        if (index % 2 !== 0) { // check if the posiion of string is odd
            casedString += this[index].toUpper(); // change to uppercase
            continue;
        }
        casedString += this[index].toLower(); // change character to lowercase
    }
    return casedString;
}

// numberWords, Returns the numbers in words
String.prototype.numberWords = function () {
    let numberWords = '';
    let arrayOfWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; //define number in words
    for (let index = 0; index < this.length; index++) {
        let wordIdex = this[index]; // grab the number
        if (arrayOfWords[wordIdex] === undefined) {  // if index is undefine, return error
            return 'your string contain special character/signs/space';
        }
        numberWords += arrayOfWords[wordIdex] + ' '; // use the grabbed number as index of the defined number in words
    }
    return numberWords;
}

// isDigit, Returns true if the string is a digit(one number)
String.prototype.isDigit = function () {
    if (this.length > 1) { // return error if string length is greater one
        return false;
    }
    let regexPattern = /^\d/, resultOfCheck = regexPattern.test(this); //check if string is a number, return true if it is, else false
    return resultOfCheck;
}

//exporting String prototype for method to be access
module.exports = String.prototype;

