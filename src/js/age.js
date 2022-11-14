export default class Age {
  constructor(earthAge, userAverage) {
    this.earth = earthAge;
    this.userAverage = userAverage;

  }

  mercuryAge() {
    return Number((this.earth / 0.24).toFixed(2));
  }

  venusAge() {
    return Number((this.earth / 0.62).toFixed(2));
  }

  marsAge() {
    return Number((this.earth / 1.88).toFixed(2));
  }

  jupiterAge() {
    return Number((this.earth / 11.86).toFixed(2));
  }

  difference() {
    let average = this.averageEarth
  }

}

//   methodTemplate() {
//     return this.side1 * this.side2;
//   }
