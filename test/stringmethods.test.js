// import string methods
require('../methods/stringmethods');

// hasVowels test suite
describe('hasVowel Method Test suite', function() {
  test('if the string contains vowels', function() {
    var textString = 'Hello world of regex';
    var resultOfCheck = textString.hasVowels();
    expect(resultOfCheck).toBeTruthy();
  });
  test('if no vowel in an string', function() {
    expect(' '.hasVowels()).toBeFalsy();
  });
  test('if string contain no vowels', function() {
    expect('td7802fhy'.hasVowels()).toBeFalsy();
  });
  test('if no vowel in string of special character', function() {
    expect('@$%^_.!`+-}{<>'.hasVowels()).toBeFalsy();
  });
});

// convert string to upper case test suite
describe('toUpper Test Suite', function() {
  test('if string is converted to uppercase', function() {
    expect('Hello'.toUpperChar()).toBe('HELLO');
  });
  test('if string containing specail character is converted to uppercase', function() {
    expect('Hello!*$%#'.toUpperChar()).toBe('HELLO!*$%#');
  });
  test('if string of digit and special character is converted to uppercase ', function() {
    expect(' 4679 !*$%#'.toUpperChar()).toBe(' 4679 !*$%#');
  });
});

// convert string to lower case test suite
describe('toLower Test Suite', function() {
  test('if string is converted to lowercase', function() {
    expect('HELLO!@#$%^&* ( ) - . +'.toLower()).toBe('hello!@#$%^&* ( ) - . +');
  });
  test('if string containing digit is converted to lowercase', function() {
    expect('hELLo123'.toLower()).toBe('hello123');
  });
});

// ucFirst, convert the first character in a string to uppercase test suite
describe('ucFirst Test Suite', function() {
  test('if the first character in a string is converted to uppercase', function() {
    expect('Hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
  });
  test('if the first Uppercase character in a string is converted to uppercase', function() {
    expect('hello jagajastic'.ucFirst()).toBe('Hello jagajastic');
  });
  test('if the first character in a string is digit and return it without coversion', function() {
    expect('2ello jagajastic'.ucFirst()).toBe('2ello jagajastic');
  });
});

//isQuestion, check if a string is a question test suite
describe('isQuestion Test Suite', function() {
  test('if the string is a question', function() {
    expect('Hello, how are you?'.isQuestion()).toBeTruthy();
  });
  test('if question mark within a string makes the string a question', function() {
    expect('Hello?, how are you'.isQuestion()).toBeFalsy();
  });
});

// listWords, this loop through string then return array of all string test suite
describe('listWords Test suite', function() {
  test('if a string will return a list of word', function() {
    expect('Returns a list of words'.listWords()).toEqual(
      expect.arrayContaining(['Returns', 'a', 'list', 'of', 'words'])
    );
  });
  test('if the string will return list of words with special character as a word', function() {
    expect('Returns a list of words, ?'.listWords()).toEqual(
      expect.arrayContaining(['Returns', 'a', 'list', 'of', 'words'])
    );
  });
  test('if the list of word returned ignore the special character in the string', function() {
    expect('!@#$%^&*()_+?'.listWords()).toEqual(expect.arrayContaining([]));
  });
});

// wordCount, this count words test suite
describe('wordCount Test Suite', function() {
  test('if the word in a string can be counted', function() {
    expect('Returns the number of words in the string'.wordCount()).toBe(8);
  });
  test('if the string contain zero string length', function() {
    expect('  '.wordCount()).toBe(0);
  });
  test('if the special character returned is a word', function() {
    expect(' !@#$%^&*()_+ '.wordCount()).toBe(1);
  });
});

// toCurrency, this format digit to currency test suite
describe('toCurrency Test Suite', function() {
  test('if the string of digit returned is formatted to a currency repreentation', function() {
    expect('1234567879.22'.toCurrency()).toBe('1,234,567,879.22');
  });
  test('if the string return is still a currency without the comma  separation', function() {
    expect('110.1234'.toCurrency()).toBe('110.1234');
  });
});

// fromCurrency, this format currency to digit test suite
describe('fromCurrency Test Suite', function() {
  test('if the string return is a currency', function() {
    expect('1,234,567,879.22'.fromCurrency()).toBe('1234567879.22');
  });
  test('if the digit returned is a string of digit not currency', function() {
    expect('110.1234'.fromCurrency()).toBe('110.1234');
  });
});

// inverseCase, Returns each letter in the string as an inverse of its current case test suite
describe('inverseCase Test Suite', function() {
  test('if the string return is the inverse of the current string', function() {
    expect('inverseCase Test Suite'.inverseCase()).toBe(
      'INVERSEcASE tEST sUITE'
    );
  });
  test('if return string matched the inverse case', function() {
    expect('INVERSEcASE tEST sUITE'.inverseCase()).toBe(
      'inverseCase Test Suite'
    );
  });
});

// alternatingCase, Returns the letters in alternating cases. It must start with a lower case
describe('alternatingCase Test suite', function() {
  test('if the alternate string is first character is a lowercase character', function() {
    expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
  });
  test('if the string first character is a special character', function() {
    expect('!onomatopoeia'.alternatingCase()).toBeFalsy();
  });
});

// numberWords, Returns the numbers in words
describe('numberWords Test suite', function() {
  test('if it return the total number of words', function() {
    expect('123'.numberWords()).toBe('one two three ');
  });
  test('if the string contains special character', function() {
    expect('!123'.numberWords()).toBeFalsy();
  });
});

// isDigit, Returns true if the string is a digit(one number) test suite
describe('isDigit', function() {
  test('if the string is a digit', function() {
    expect('1'.isDigit()).toBeTruthy();
  });
  test('if the string is more than one', function() {
    expect('11234'.isDigit()).toBeFalsy();
  });
  test('if the single string is a specail character', function() {
    expect('!'.isDigit()).toBeFalsy();
  });
});
