export default class Age {
  constructor(earthAge, userAverage) {
    this.earthAge = earthAge;
    this.userAverage = userAverage;
    this.planetExpectancies = [];
  }

  planetAvgs() {
    this.planetExpectancies.push(this.mercuryAge(this.userAverage));
    this.planetExpectancies.push(this.venusAge(this.userAverage));
    this.planetExpectancies.push(this.marsAge(this.userAverage));
    this.planetExpectancies.push(this.jupiterAge(this.userAverage));
  }
  

  mercuryAge(input) {
    return Number((input / 0.24).toFixed(2));
  }

  venusAge(input) {
    return Number((input / 0.62).toFixed(2));
  }

  marsAge(input) {
    return Number((input / 1.88).toFixed(2));
  }

  jupiterAge(input) {
    return Number((input / 11.86).toFixed(2));
  }

  difference() {
    let earthDifference = Number((this.userAverage - this.earthAge).toFixed(2));
    return `You have about ${earthDifference} earth years remaining`;
  }

}

//   methodTemplate() {
//     return this.side1 * this.side2;
//   }
