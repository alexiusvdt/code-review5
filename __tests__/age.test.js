import Age from '../src/js/age.js';

describe('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(30,80);
  });
  
  test('should take user input of earth age and store in Age object', () => {
    expect(age.earth).toEqual(30);
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

  test('should create average expectancy for a Mercury', () => {
    expect(age.planetAverages).toEqual([333.33])
  })

  // test('should return the difference of avg expectancy and current age on earth', () => {
  //   expect(age.difference().toEqual(50));
  // })

});