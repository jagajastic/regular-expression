// hasVowels, function to check if a string contain vowel and return true|false.
String.prototype.hasVowels = function () {
    let regexPattern = /[aeiou]/, resultOfCheck = regexPattern.test(this);
    return resultOfCheck;
}
//exporting String prototype for method to be access
module.exports = String.prototype;

// console.log('hello d'.hasVowels());