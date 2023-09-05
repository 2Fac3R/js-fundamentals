/* eslint-disable no-console */
/*
  beforeAll(): se ejecuta antes de todas las pruebas.
  beforeEach(): se ejecuta antes de cada prueba.
  afterEach(): se ejecuta después de cada prueba.
  afterAll(): se ejecuta después de todas las pruebas
*/

describe('Set', () => {
  test('case 1', () => {
    expect(1 + 2).toBe(3);
  });
  test('case 1', () => {
    expect(4 * 3).toBe(12);
  });

  describe('Group 1', () => {
    beforeAll(() => {
      console.log('Running before tests in this group');
    });
    test('case 3', () => {
      expect(4 / 2).toBe(2);
    });
    test('case 4', () => {
      expect(2 - 1).toBe(1);
    });
  });
});
