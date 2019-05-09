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
            continue;
        }
        caseString += String.fromCharCode(this.charCodeAt(i));
    }
    return caseString;
}

//  toLower, function to conveert upper case string to lowercase
String.prototype.toLower = function () {
    var caseString = "";
    for (index = 0; index < this.length; index++) {
        if (this.charCodeAt(index) > 64 && this.charCodeAt(index) < 91) {
            caseString += String.fromCharCode(this.charCodeAt(index) + 32);
            continue;
        }
        caseString += String.fromCharCode(this.charCodeAt(index));
    }
    return caseString;
}

// ucFirst, function to convert first character of a string to uppercase
String.prototype.ucFirst = function () {
    let regexPattern = /^[a-z]/, resultOfCheck = regexPattern.test(this);
    let remainChar = this.slice(1);
    if (resultOfCheck) {
        return (this[0].toUpper()) + remainChar;
    }
    return (this[0] + remainChar);
}
//exporting String prototype for method to be access
module.exports = String.prototype;

// console.log('hello d'.hasVowels());