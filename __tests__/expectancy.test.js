import Expectancy from '../src/js/expectancy.js';

describe('Expectancy', () => {
  let expectancy;

  beforeEach(() => {
    expectancy = new Expectancy(false, 150, 1, 8, false, "high");
  });

  test('should create an Expectancy object', () => {
    expect(expectancy.smoker).toEqual(false);
    expect(expectancy.weight).toEqual(150);
    expect(expectancy.married).toEqual(1);
    expect(expectancy.drinks).toEqual(8);
    expect(expectancy.majorCondition).toEqual(false);
    expect(expectancy.exercise).toEqual("high");
  });

  test('smokers have their base life expectancy modified by -5', () => {
    expect(expectancy.getLifeExpectancy()).toEqual(80);
    expectancy.smoker = true;
    expect(expectancy.getLifeExpectancy()).toEqual(75);
  });

  test('users with high weight values get a -2 to their expectancy', () => {
    expect(expectancy.getLifeExpectancy()).toEqual(80);
    expectancy.weight = 200;
    expect(expectancy.getLifeExpectancy()).toEqual(78);
  });
 
  test('users are applied a bonus based on marital status', () => {
    expect(expectancy.getLifeExpectancy()).toEqual(80);
    expectancy.married = 1
    expect(expectancy.getLifeExpectancy()).toEqual(82);
  })

});