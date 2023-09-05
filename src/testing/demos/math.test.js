const { sum, multiply, divide } = require('./math');

describe('Tests for Math', () => {
  test('Operation 1 + 2 equals 3', () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });

  test('Operation 10 * 2 equals 20', () => {
    const res = multiply(10, 2);
    expect(res).toBe(20);
  });

  test('Operation 10 / 2 equals 5', () => {
    const res = divide(10, 2);
    expect(res).toBe(5);
  });
});
