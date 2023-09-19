/* eslint-disable no-console */
const text = 'orem ipsum dolor sit amet, consectetur dolor adipiscing elit. Morbi tempor purus massa, eu egestas odio luctus in. Praesent bibendum, mi eget ornare consectetur, nulla ligula pharetra leo, ac tempus orci elit ut ligula. Praesent egestas augue ac sem gravida fermentum. Cras vitae ligula sit amet felis sodales dapibus. Duis faucibus suscipit tortor in faucibus. Ut sem justo, condimentum in lacus ac, tempor fermentum neque. Suspendisse odio ligula, aliquam dictum ultrices at, aliquet hendrerit lacus.';
const phrase = 'Please visit Microsoft';
const url = 'https://www.microsoft.com';
const text1 = '      Hello World!      ';

console.log(text.length); // returns the length of the string
console.log(text.slice(0, 10)); // extracts a part of a string and returns the extracted part string
console.log(text.substring(10, 20)); // start and end values less than 0 are treated as 0
console.log(phrase.replace('Microsoft', 'W3Schools')); // replaces a specified value with another value in a string
console.log(text.replaceAll('dolor', 'fun').slice(0, 50)); // allows you to specify a regular expression instead of a string to be replaced
console.log(phrase.toUpperCase()); // toUpperCase(), toLowerCase()
console.log(phrase.concat(' - ', text.slice(0, 10))); // joins two or more strings
console.log(text1.trim()); // removes whitespace from both sides of a string. trimStart(), trimEnd()
console.log(text.charAt(2)); // returns the character at a specified index (position) in a string
console.log(text[2]); // property access
console.log(phrase.split(' ')); // A string can be converted to an array with the split() method
console.log(phrase.split('')); // If the separator is "", the returned array will be an array of single characters
console.log(phrase.indexOf('visit')); // returns the index (position) the first occurrence
console.log(text.indexOf('dolor')); // returns the index (position) the last occurrence
console.log(text.includes('dolor')); // returns true if a string contains a specified value
console.log(`${phrase} -> ${url}`); // Template literals
