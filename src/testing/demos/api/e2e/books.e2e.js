/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');
const createApp = require('../src/app');

describe('test for books', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  test('should return the list books', async () => {
    // Act
    const response = await request(app).get('/api/v1/books');
    // Assert
    expect(response.body.length).toEqual(2);
  });
});
