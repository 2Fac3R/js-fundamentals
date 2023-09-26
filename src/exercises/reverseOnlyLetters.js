/* eslint-disable no-console */

/**
 * Checks if a character is a letter.
 * @param {string} char - The character to check.
 * @returns {boolean} True if the character is a letter, false otherwise.
 */
function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

/**
 * Reverses a string where all letters reverse their positions,
 * and non-letter characters stay in the same place.
 * @param {string} S - The input string.
 * @returns {string} The reversed string.
 */
function reverseOnlyLetters(S) {
  const chars = S.split('');
  let start = 0;
  let end = chars.length - 1;

  while (start < end) {
    if (!isLetter(chars[start])) {
      start += 1;
    } else if (!isLetter(chars[end])) {
      end -= 1;
    } else {
      // Swap the letters at start and end positions
      [chars[start], chars[end]] = [chars[end], chars[start]];
      start += 1;
      end -= 1;
    }
  }

  return chars.join('');
}

// Example usage:
const input = 'ab-cd';
const reversed = reverseOnlyLetters(input);
console.log(reversed); // Output: "dc-ba"
