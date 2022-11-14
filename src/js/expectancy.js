export default class Expectancy {
  constructor(smoker, weight, married, drinks, majorCondition, exercise) {
    this.smoker = smoker;
    this.weight = weight;
    this.married = married;
    this.drinks = drinks;
    this.majorCondition = majorCondition;
    this.exercise = exercise; 
  }

  getLifeExpectancy() {
    let life = 80;
    if (this.smoker === true) {
      life += -5;
    } else if (this.weight >= 200) {
      life += -2;
    } else if (this.married === 1) {
      life += 2;
    }
    return life
  }
}