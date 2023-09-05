/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const request = require('supertest');
const createApp = require('../src/app');

describe('test for [GET]/', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  test('should return "Hello World!', async () => {
    const response = await request(app).get('/');
    // console.log('response', response);
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('Hello World!');
  });
});
