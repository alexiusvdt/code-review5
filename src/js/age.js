export default class Age {
  constructor(earthAge, averageEarth) {
    this.earth = earthAge;
    this.averageEarth = averageEarth;
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


}

//   methodTemplate() {
//     return this.side1 * this.side2;
//   }
