export default class Age {
  constructor(earthAge, userAverage) {
    this.earthAge = earthAge;
    this.userAverage = userAverage;
    this.planetAverages = [];

  }

  mercuryAge() {
    return Number((this.earthAge / 0.24).toFixed(2));
  }

  venusAge() {
    return Number((this.earthAge / 0.62).toFixed(2));
  }

  marsAge() {
    return Number((this.earthAge / 1.88).toFixed(2));
  }

  jupiterAge() {
    return Number((this.earthAge / 11.86).toFixed(2));
  }

  difference() {
    return Number((this.userAverage - this.earthAge).toFixed(2));
  }

}

//   methodTemplate() {
//     return this.side1 * this.side2;
//   }
