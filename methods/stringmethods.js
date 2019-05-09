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

// isQuestion, function that check a string if it's a question.
String.prototype.isQuestion = function () {
    let regexPattern = /\b[\w\s]+\b[?]$/, resultOfCheck = regexPattern.test(this);
    return resultOfCheck;
}

// listWord, this method list out all the word and return array of words
String.prototype.listWords = function () {
    let regexPattern = /\b(\w|')+\b/gim, resultOfCheck = this.match(regexPattern);
    return resultOfCheck;
}

// wordCount, this count the words in a string 
String.prototype.wordCount = function () {
    let arrayOfWords = this.listWords(), wordCount = arrayOfWords == null ? 0 : arrayOfWords.length;
    return wordCount;
}
//exporting String prototype for method to be access
module.exports = String.prototype;