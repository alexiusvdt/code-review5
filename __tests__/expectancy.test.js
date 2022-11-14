import Expectancy from '../src/js/expectancy.js';

describe('Expectancy', () => {
  let expectancy;

  beforeEach(() => {
    expectancy = new Expectancy(false, 150, 0, 1, false, "high");
  });

  test('should create an Expectancy object', () => {
    expect(expectancy.smoker).toEqual(false);
    expect(expectancy.weight).toEqual(150);
    expect(expectancy.married).toEqual(0);
    expect(expectancy.drinks).toEqual(1);
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
 
  test('users are applied a +2 bonus if marital status is 1', () => {
    expect(expectancy.getLifeExpectancy()).toEqual(80);
    expectancy.married = 1
    expect(expectancy.getLifeExpectancy()).toEqual(82);
  });

  test('users with a major health condition get a strong penalty', () => {
    expect(expectancy.getLifeExpectancy()).toEqual(80);
    expectancy.majorCondition = true;
    expect(expectancy.getLifeExpectancy()).toEqual(70);
  })

  test('users with high drinks per week have a moderate penalty applied', () => {
    expect(expectancy.getLifeExpectancy()).toEqual(80);
    expectancy.drinks = 7;
    expect(expectancy.getLifeExpectancy()).toEqual(75);
  });

  test('users with moderate drinks per week have a light penalty applied', () => {
    expect(expectancy.getLifeExpectancy()).toEqual(80);
    expectancy.drinks = 4;
    expect(expectancy.getLifeExpectancy()).toEqual(78);

  });

});