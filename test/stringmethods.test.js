// import string methods 
require('../methods/stringmethods');

// hasVowels test suite
describe('hasVowel Method Test suite', function () {
    // return true if string has vowel in it
    test('Returns true if the string contains vowels', function () {
        var textString = 'Hello world of regex';
        var resultOfCheck = textString.hasVowels();
        expect(resultOfCheck).toBeTruthy();
    });
    // return false if no vowel in an empty string
    test('Returns false if no vowel in an empty string', function () {
        expect(' '.hasVowels()).toBeFalsy();
    });
    // return false if no vowel in string
    test('Returns false if string contain no vowels', function () {
        expect('td7802fhy'.hasVowels()).toBeFalsy();
    });
    // return false if no vowel in string of special character
    test('Returns false if no vowel in string of special character', function () {
        expect('@$%^_.!`+-}{<>'.hasVowels()).toBeFalsy();
    });

});

// convert string to upper case test suite
describe('toUpper Test Suite', function () {
    test('Returns the String in question but with all characters in upper cases as applicable', function () {
        expect('Hello'.toUpper()).toBe('HELLO');
    });
    // convert string that contains special character to upper case test suite 
    test('Returns the string that contains special character to upper case', function () {
        expect('Hello!*$%#'.toUpper()).toBe('HELLO!*$%#');
    });
    // convert string that contains number to upper case test suite 
    test('Returns the string that contains special character to upper case ', function () {
        expect(' 4679 !*$%#'.toUpper()).toBe(' 4679 !*$%#');
    });
});

// convert string to lower case test suite
describe('toLower Test Suite', function () {
    test('Returns upper case of the character ignoring the special character', function () {
        expect('HELLO!@#$%^&* ( ) - . +'.toLower()).toBe('hello!@#$%^&* ( ) - . +');
    });
    // Returns the upper case of the character ignoring the numbers
    test('Returns the upper case of the character ignoring the numbers', function () {
        expect('hELLo123'.toLower()).toBe('hello123');
    });
});

// ucFirst, convert the first character in a string to uppercase test suite
describe('ucFirst Test Suite', function () {
    test('Returns the first character in question to upper case', function () {
        expect('Hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
    });
    // Returns the first character in question(lower case) to upper case
    test('Returns the first character in question(lower case) to upper case', function () {
        expect('hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
    });
    // Returns the string thesame as the previous because it start with number
    test('Returns the string thesame as the previous because it start with number', function () {
        expect('2ello jagajastic'.ucFirst()).toBe('2ello jagajastic');
    });
});

//isQuestion, check if a string is a question test suite
describe('isQuestion Test Suite', function () {
    test('Return true because the last character is (?)', function () {
        expect('Hello, how are you?'.isQuestion()).toBeTruthy();
    });
    // Return false because the last character is not (?)
    test('Return true because the last character is not (?)', function () {
        expect('Hello?, how are you'.isQuestion()).toBeFalsy();
    });
});

// listWords, this loop through string then return array of all string test suite
describe('listWords Test suite', function () {
    test('Returns a list of the words in the string, as an Array', function () {
        expect('Returns a list of words'.listWords()).toEqual(expect.arrayContaining(['Returns', 'a', 'list', 'of', 'words']));
    });
    // Returns a list of the words in the string, as an Array ignoring the special characters
    test('Returns a list of the words in the string, as an Array ignoring the special characters', function () {
        expect('Returns a list of words, ?'.listWords()).toEqual(expect.arrayContaining(['Returns', 'a', 'list', 'of', 'words']));
    });
    // Returns an empty Array ignoring all special character
    test('Returns an empty Array ignoring all special character', function () {
        expect('!@#$%^&*()_+?'.listWords()).toEqual(expect.arrayContaining([]));
    });
});

// wordCount, this count words test suite
describe('wordCount Test Suite', function () {
    test('Returns the number of words in the string', function () {
        expect('Returns the number of words in the string'.wordCount()).toBe(8);
    });
    // Returns 0 for empty string
    test('Returns 0 for empty string', function () {
        expect('  '.wordCount()).toBe(0);
    });
    // Return 1 because it consider group of special character
    test('Return 1 because it consider group of special character', function () {
        expect(' !@#$%^&*()_+ '.wordCount()).toBe(1);
    });
});

// toCurrency, this format digit to currency test suite
describe('toCurrency Test Suite', function () {
    // Returns a currency representation of the String of digit
    test('Returns a currency representation of the String of digit', function () {
        expect('1234567879.22'.toCurrency()).toBe('1,234,567,879.22');
    });
    // Returns the String of digit since is not more than 3 digit
    test('Returns the String of digit since is not more than 3 digit', function () {
        expect('110.1234'.toCurrency()).toBe('110.1234');
    });
});

// fromCurrency, this format currency to digit test suite
describe('fromCurrency Test Suite', function () {
    // Returns a number representation of the Currency String removing the comma(,)
    test('Returns a number representation of the Currency String removing the comma(,)', function () {
        expect('1,234,567,879.22'.fromCurrency()).toBe('1234567879.22');
    });
    // Returns a number representation of the Currency String
    test('Returns a number representation of the Currency String', function () {
        expect('110.1234'.fromCurrency()).toBe('110.1234');
    });
});

// inverseCase, Returns each letter in the string as an inverse of its current case test suite
describe('inverseCase Test Suite', function () {
    // Returns each letter in the string as an inverse of its current case
    test('Returns each letter in the string as an inverse of its current case', function () {
        expect('inverseCase Test Suite'.inverseCase()).toBe('INVERSEcASE tEST sUITE');
    });
    // Returns inverse string of its current case
    test('Returns inverse string of its current case', function () {
        expect('INVERSEcASE tEST sUITE'.inverseCase()).toBe('inverseCase Test Suite');
    });
});

// alternatingCase, Returns the letters in alternating cases. It must start with a lower case
describe('alternatingCase Test suite', function () {
    // Returns the letters in alternating cases. It must start with a lower case
    test('Returns the letters in alternating cases. It must start with a lower case', function () {
        expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
    });
    // Returns error if string contain special character
    test('Returns error if string contain special character', function () {
        expect('!onomatopoeia'.alternatingCase()).toBe('you test contain special character!');
    });
});

// numberWords, Returns the numbers in words
describe('numberWords Test suite', function ()  {
    // Returns the numbers in words
    test('Returns the numbers in words', function () {
        expect('123'.numberWords()).toBe('one two three ');
    });
    // Returns error if string contain special character
    test('Returns error if string contain special character', function () {
        expect('!123'.numberWords()).toBe('your string contain special character/signs/space');
    });
});

// isDigit, Returns true if the string is a digit(one number) test suite
describe('isDigit', function () {
    // Returns true if the string is a digit(one number)
    test('Returns true if the string is a digit(one number)', function () {
        expect('1'.isDigit()).toBeTruthy();
    });
    // Returns error for the string is more than one
    test('Returns falsy for the string is more than one', function () {
        expect('11234'.isDigit()).toBeFalsy();
    });
    // Returns false for the string contain special character
    test('Returns false for the string contain special character', function () {
        expect('!'.isDigit()).toBeFalsy();
    });
});