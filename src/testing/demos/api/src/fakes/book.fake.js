/* eslint-disable import/no-extraneous-dependencies */
const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.product(),
});

const generateManyBooks = (quantity = 10) => {
  const books = [];
  for (let i = 0; i < quantity; i += 1) {
    books.push(generateOneBook());
  }
  return books;
};

module.exports = {
  generateOneBook,
  generateManyBooks,
};
