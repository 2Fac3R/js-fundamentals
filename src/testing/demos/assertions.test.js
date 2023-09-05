test('test obj', () => {
  const data = { name: 'Gustavo' };
  expect(data).toEqual({ name: 'Gustavo' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test booleans', () => {
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();

  // True --> toBeTruthy
  expect([]).toBeTruthy();
  expect({}).toBeTruthy();
  expect(-1).toBeTruthy();

  // False --> toBeFalsy
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeFalsy();
});

test('test strings', () => {
  const myStr = 'testing strings';
  expect(myStr).toMatch(/str/);
});

test('test arrays', () => {
  const numbers = [128, 1024, 512, 720];
  expect(numbers).toContain(512);
});
