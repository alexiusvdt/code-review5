export default class Age {
  constructor(earthAge, userExpectancy) {
    this.earthAge = earthAge;
    this.userExpectancy = userExpectancy;
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
    if (this.earthAge < this.userExpectancy) {
      let earthDiff = Number((this.userExpectancy - this.earthAge).toFixed(2));
      let mercDiff = Number((this.mercuryAge(this.userExpectancy) - this.mercuryAge(this.earthAge)).toFixed(2));
      let venDiff = Number((this.venusAge(this.userExpectancy) - this.venusAge(this.earthAge)).toFixed(2));
      let marsDiff = Number((this.marsAge(this.userExpectancy) - this.marsAge(this.earthAge)).toFixed(2));
      let jupDiff = Number((this.jupiterAge(this.userExpectancy) - this.jupiterAge(this.earthAge)).toFixed(2));
    return `You have about ${earthDiff} Earth years, ${mercDiff} Mercury years, ${venDiff} Venus years, ${marsDiff} Mars years, or ${jupDiff} Jupiter years remaining.`;
  } else if (this.earthAge === this.userExpectancy) {
    return `Wow! Your age of ${this.earthAge} is exactly the calculated expectancy of ${this.userExpectancy}! Here's to your continued health!`
  } else {  
      let earthDiff = Math.abs((this.userExpectancy - this.earthAge).toFixed(2));
      let mercDiff = Math.abs((this.mercuryAge(this.userExpectancy) - this.mercuryAge(this.earthAge)).toFixed(2));
      let venDiff = Math.abs((this.venusAge(this.userExpectancy) - this.venusAge(this.earthAge)).toFixed(2));
      let marsDiff = Math.abs((this.marsAge(this.userExpectancy) - this.marsAge(this.earthAge)).toFixed(2));
      let jupDiff = Math.abs((this.jupiterAge(this.userExpectancy) - this.jupiterAge(this.earthAge)).toFixed(2));
    return `You have surpassed the average life expectancy by: ${earthDiff} Earth years, ${mercDiff} Mercury years, ${venDiff} Venus years, ${marsDiff} Mars years, or ${jupDiff} Jupiter years.`;
    }
  }

}
