import Age from '../src/js/age.js';

describe('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(30);
  });
  
  test('should take user input of earth age and store in an object', () => {
    expect(Age.earth).toEqual(30) 
  });


});