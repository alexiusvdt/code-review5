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

  test('smokers have their base life expectancy modified by -5')
    expect(expectancy.getLifeExpectancy()).toEqual(75)
});