const BooksService = require('../services/books.service');
const { generateOneBook, generateManyBooks } = require('../fakes/book.fake');

const fakeBooks = generateManyBooks(3);

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => [{ ...fakeBooks[0] }],
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Tests for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('Tests for getBooks', () => {
    test('should return a lists of books', async () => {
      const books = await service.getBooks({});
      expect(books.length).toEqual(3);
    });
  });

  describe('Tests for createBook', () => {
    test('should return the created book', async () => {
      const book = generateOneBook();
      const res = await service.createBook(book);
      expect(res.length).toEqual(1);
    });
  });
});
