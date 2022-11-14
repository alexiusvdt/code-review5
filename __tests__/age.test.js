import Age from '../src/js/age.js';

describe('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(30,80);
  });
  
  test('should take user input of earth age and store in Age object', () => {
    expect(age.earthAge).toEqual(30);
  });

  test('should take user input of earth life expectancy and store in Age object', () => {
    expect(age.userAverage).toEqual(80);
  });

  test('should return user age in Mercury years', () => {
    expect(age.mercuryAge()).toEqual(125);
  });

  test('should return user age in Venus years', () => {
    expect(age.venusAge()).toEqual(48.39);
  });

  test('should return user age in Mars years', () => {
    expect(age.marsAge()).toEqual(15.96);
  });

  test('should return user age in Jupiter years', () => {
    expect(age.jupiterAge()).toEqual(2.53);
  });

  test('should return average remaining years on earth in a string', () => {
    expect(age.difference()).toEqual(`You have about 50 earth years remaining`)
  })

  // future tests
  // test('should return average remaining years on Mercury', () => {
  //   expect(age.difference().toEqual(333.33))
  // })


});