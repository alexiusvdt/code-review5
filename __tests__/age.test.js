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
    expect(age.averageEarth).toEqual(80)
  })

});