const Person = require('./Person');

describe('Test for Person', () => {
  let person;

  beforeEach(() => {
    // Arrange / Given
    person = new Person('Rigo', 45, 1.7);
  });

  test('should return down', () => {
    // Arrange / Given
    person.weight = 45;
    // Act / When
    const imc = person.calcIMC();
    // Assert / Then
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
