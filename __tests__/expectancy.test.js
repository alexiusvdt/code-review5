import Expectancy from '../src/js/expectancy.js';

describe('Expectancy', () => {
  let expectancy;

  beforeEach(() => {
    expectancy = new Expectancy(false, 150,  1, 8, false, "high");
  });

  test('should create an Expectancy object')
  expect(expectancy.smoker).toEqual(any(Boolean));
  expect(expectancy.weight).toEqual(any(Number));
  expect(expectancy.married).toBeGreaterThanOrEqualTo(0);
  expect(expectancy.married).toBeLessThanOrEqualTo(2);
  expect(expectancy.drinks).toBeGreaterThanOrEqualTo(0);
  expect(expectancy.drinks).toBeLessThanOrEqualTo(10);
  expect(expectancy.major).toEqual(any(Boolean));
  expect(expectancy.exercise).toEqual("high")
  



});