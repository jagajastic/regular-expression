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

// convert string to upper case test suite
describe('toUpper Test Suite', function () {
    test('Returns the String in question but with all characters in upper cases as applicable', function () {
        expect('Hello'.toUpper()).toBe('HELLO');
        expect('Hello!*$%#'.toUpper()).toBe('HELLO!*$%#');
        expect(' 4679 !*$%#'.toUpper()).toBe(' 4679 !*$%#');
    });
});

// convert string to lower case test suite
describe('toLower Test Suite', function () {
    test('Returns the String in question but with all characters in their lower cases as applicable', function () {
        expect('hELLo123'.toLower()).toBe('hello123');
        expect('HELLO!@#$%^&* ( ) - . +'.toLower()).toBe('hello!@#$%^&* ( ) - . +');
    });
});

// ucFirst, convert the first character in a string to uppercase test suite
describe('ucFirst Test Suite', function () {
    test('Returns the String in question but changes the First Character to an Upper case', function () {
        expect('Hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
        expect('hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
        expect('2ello jagajastic'.ucFirst()).toBe('2ello jagajastic');
    });
});

//isQuestion, check if a string is a question test suite
describe('isQuestion Test Suite', function () {
    test('Return true if the string is a question (ending with a question mark)', function () {
        expect('Hello, how are you?'.isQuestion()).toBeTruthy();
        expect('Hello?, how are you'.isQuestion()).toBeFalsy();
    });
});

// listWords, this loop through string then return array of all string test suite
describe('listWords Test suite', function () {
    test('Returns a list of the words in the string, as an Array', function () {
        expect('Returns a list of words'.listWords()).toEqual(expect.arrayContaining(['Returns', 'a', 'list', 'of', 'words']));
        expect('Returns a list of words, ?'.listWords()).toEqual(expect.arrayContaining(['Returns', 'a', 'list', 'of', 'words']));
        expect('!@#$%^&*()_+?'.listWords()).toEqual(expect.arrayContaining([]));
    });
});

// wordCount, this count words test suite
describe('wordCount Test Suite', function () {
    test('Returns the number of words in the string', function () {
        expect('Returns the number of words in the string'.wordCount()).toBe(8);
        expect('  '.wordCount()).toBe(0);
        expect(' !@#$%^&*()_+ '.wordCount()).toBe(1);
    });
});

// toCurrency, this format digit to currency test suite
describe('toCurrency Test Suite', function () {
    test('Returns a currency representation of the String of digit', function () {
        expect('1234567879.22'.toCurrency()).toBe('1,234,567,879.22');
        expect('110.1234'.toCurrency()).toBe('110.1234');
    });
});

// fromCurrency, this format currency to digit test suite
describe('fromCurrency Test Suite', function () {
    test('Returns a number representation of the Currency String', function () {
        expect('1,234,567,879.22'.fromCurrency()).toBe('1234567879.22');
        expect('110.1234'.fromCurrency()).toBe('110.1234');
    });
});

// inverseCase, Returns each letter in the string as an inverse of its current case test suite
describe('inverseCase Test Suite', function () {
    test('Returns each letter in the string as an inverse of its current case', function () {
        expect('inverseCase Test Suite'.inverseCase()).toBe('INVERSEcASE tEST sUITE');
        expect('INVERSEcASE tEST sUITE'.inverseCase()).toBe('inverseCase Test Suite');
    });
});

// alternatingCase, Returns the letters in alternating cases. It must start with a lower case
describe('alternatingCase Test suite', function () {
    test('Returns the letters in alternating cases. It must start with a lower case', function () {
        expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
        expect('!onomatopoeia'.alternatingCase()).toBe('you test contain special character!');
    });
});

// numberWords, Returns the numbers in words
describe('numberWords Test suite', function ()  {
    test('Returns the numbers in words', function () {
        expect('123'.numberWords()).toBe('one two three ');
        expect('!123'.numberWords()).toBe('your string contain special character/signs/space');
    });
});

// isDigit, Returns true if the string is a digit(one number) test suite
describe('isDigit', function () {
    test('Returns true if the string is a digit(one number)', function () {
        expect('1'.isDigit()).toBeTruthy();
        expect('11234'.isDigit()).toBeFalsy();
        expect('!'.isDigit()).toBeFalsy();
    });
});