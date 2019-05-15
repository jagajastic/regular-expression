# Regular Expression Extended methods

Regular expression extended methods is a pre-checkpoint project to test technical know-how of using regular expression in Javascript

# Getting Started

Before you start, you need to get the following software install in you system

- [Install Vs code](https://ehttps://code.visualstudio.com/download)
- [Install Nodejs](https://ehttps://code.visualstudio.com/download)
- [Install Git](https://ehttps://code.visualstudio.com/download)

# Clone the Repository

Run

<code>git clone https://github.com/jagajastic/regular-expression.git</code>

# Installation

To install all dependencies, Run

<code>npm install</code>

# String Methods
The string methods is in the methods/stringmethods.js file and it contain the following additional methods;

- **hasVowels** (typeof Boolean): Returns true if the string contains vowels 
- **toUpper** (typeof String): Returns the String in question but with all characters in upper cases as applicable
- **toLower** (typeof String): Returns the String in question but with all characters in their lower cases as applicable
- **ucFirst** (typeof String): Returns the String in question but changes the First Character to an Upper case
- **isQuestion** (typeof Boolean): Return true if the string is a question (ending with a question mark)
- **words**: Returns a list of the words in the string, as an Array.
- **wordCount** (typeof Number): Returns the number of words in the string
- **toCurrency** (typeof String): Returns a currency representation of the String 
- **fromCurrency** (typeof Number): Returns a number representation of the Currency String
- **inverseCase** (typeof String): Returns each letter in the string as an inverse of its current
- **alternatingCase** (typeof String): Returns the letters in alternating cases. It must start with a lower case
- **numberWords** (typeof String): Returns the numbers in words
- **isDigit**  (typeof Boolean): Returns true if the string is a digit(one number)


# Run Test
To test the function, Run

<code>npm test</code>
