// hasVowels, function to check if a string contain vowel and return true|false.
String.prototype.hasVowels = function () {
    let regexPattern = /[aeiou]/, resultOfCheck = regexPattern.test(this);
    return resultOfCheck;
}

// toUpper, function to convert string to upper case
String.prototype.toUpper = function () {
   var caseString = "";
   for (i = 0; i < this.length; i++) {
       if (this.charCodeAt(i) > 96 && this.charCodeAt(i) < 123) {
         caseString += String.fromCharCode(this.charCodeAt(i) - 32);
       } else {
         caseString += String.fromCharCode(this.charCodeAt(i));
       }
   }
   return caseString;
 }
//exporting String prototype for method to be access
module.exports = String.prototype;

// console.log('hello d'.hasVowels());