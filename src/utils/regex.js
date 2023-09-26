/* eslint-disable no-unused-vars */

// 1. Email Validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 2. Integer and Decimal Number Validation
const positiveIntegerRegex = /^\d+$/;
const negativeIntegerRegex = /^-\d+$/;
const integerRegex = /^-?\d+$/;
const positiveDecimalRegex = /^\d+(\.\d+)?$/;
const negativeDecimalRegex = /^-\d+(\.\d+)?$/;

// 3. URL Validation
const urlRegex = /^(http|https):\/\/([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,4})(:[0-9]+)?(\/.*)?$/;

// 4. Phone Number Extraction
const phoneRegex = /(\+\d{1,2}\s?)?(\d{3}[-\s]?\d{3}[-\s]?\d{4})/;

// 5. Keyword Search
const keywordsRegex = /\b(keyword1|keyword2|keyword3)\b/;

// 6. HTML Tag Search
const htmlTagRegex = /<[^>]*>/;

// 7. Strong Password Validation
const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// 8. Date Regex (DD/MM/YYYY Format)
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

// 9. IPv4 Regex
const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// 10. Filename Regex
const filenameRegex = /^[a-zA-Z0-9-_]+(\.[a-zA-Z0-9]+)?$/;

// 11. Letters Only (No Numbers or Symbols)
const lettersOnlyRegex = /^[a-zA-Z]+$/;
