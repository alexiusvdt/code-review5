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
    expect(age.mercuryAge(30)).toEqual(125);
  });

  test('should return user age in Venus years', () => {
    expect(age.venusAge(30)).toEqual(48.39);
  });

  test('should return user age in Mars years', () => {
    expect(age.marsAge(30)).toEqual(15.96);
  });

  test('should return user age in Jupiter years', () => {
    expect(age.jupiterAge(30)).toEqual(2.53);
  });

  test('should return average remaining years on earth in a string', () => {
    expect(age.difference()).toEqual(`You have about 50 earth years remaining`)
  });

  test('should calculate average expectancy on Mercury and store in expectancy array', () =>{
    age.planetAvgs();
    expect(age.planetExpectancies).toEqual([333.33])
  });

  // future tests
  // test('should return average remaining years on Mercury', () => {
  //   expect(age.difference().toEqual(333.33))
  // })


});