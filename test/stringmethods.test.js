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

