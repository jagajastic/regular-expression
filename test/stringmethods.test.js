// import string methods 
require('../methods/stringmethods');

// hasVowels test suite
describe('hasVowel Method Test suite', function () {
    // return true if string has vowel in it
    test('Returns true if the string contains vowels', function () {
        let textString = 'Hello world of regex';
        let resultOfCheck = textString.hasVowels();
        expect(resultOfCheck).toBeTruthy();
    });
    // return false if no vowel in string
    test('Returns false if string contain no vowels', function () {
        expect(' '.hasVowels()).toBeFalsy();
        expect('td7802fhy'.hasVowels()).toBeFalsy();
        expect('@$%^_.!`+-}{<>'.hasVowels()).toBeFalsy();
    });

}); 

// convert string to upper case
describe('toUpper Test Suite', function () {
    test('Returns the String in question but with all characters in upper cases as applicable', function () {
        expect('Hello'.toUpper()).toBe('HELLO');
        expect('Hello!*$%#'.toUpper()).toBe('HELLO!*$%#');
        expect(' 4679 !*$%#'.toUpper()).toBe(' 4679 !*$%#');
    });
});

// convert string to lower case
describe('toLower Test Suite', function () {
    test('Returns the String in question but with all characters in their lower cases as applicable', function () {
        expect('hELLo123'.toLower()).toBe('hello123');
        expect('HELLO!@#$%^&* ( ) - . +'.toLower()).toBe('hello!@#$%^&* ( ) - . +');
    });
});

// ucFirst, convert the first character in a string to uppercase
describe('ucFirst Test Suite', function () {
    test('Returns the String in question but changes the First Character to an Upper case', function () {
        expect('Hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
        expect('hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
        expect('2ello jagajastic'.ucFirst()).toBe('2ello jagajastic');
    });
});