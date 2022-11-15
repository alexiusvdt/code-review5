import Age from '../src/js/age.js';

describe('Age', () => {
  let age;

  beforeEach(() => {
    age = new Age(30, 80);
  });
  
  test('should take user input of earth age and store in Age object', () => {
    expect(age.earthAge).toEqual(30);
  });

  test('should take user derived input of earth life expectancy and store in Age object', () => {
    expect(age.userExpectancy).toEqual(80);
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

  test('should return average remaining years on Earth, Mercury, Venus, Mars, and Jupiter in a string', () => {
    expect(age.difference()).toEqual(`You have about 50 Earth years, 208.33 Mercury years, 80.64 Venus years, 26.59 Mars years, or 4.22 Jupiter years remaining.`)
  });

  test('should return positive numbers for users who are older than the average age: Earth, Mercury, Venus, Mars, and Jupiter', () => {
    age.earthAge = 90;
    expect(age.difference()).toEqual(`You have surpassed the average life expectancy by: 10 Earth years, 41.67 Mercury years, 16.13 Venus years, 5.32 Mars years, or 0.84 Jupiter years.`)
  });

  test('should return a special message if users age is equal to the calculated expectancy', () => {
    age.earthAge = 50;
    age.userExpectancy = 50;
    expect(age.difference()).toEqual(`Wow! Your age of 50 is exactly the calculated expectancy of 50! Here's to your continued health!`)
  });
});