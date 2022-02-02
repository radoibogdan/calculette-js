

class Calculette {
  constructor() {
    this.inner_value = 0
  }

  // change inner value
  set(value) {
    this.inner_value = value
    return this
  }

  reset() {
    this.inner_value = 0
    return this
  }

  // return inner value
  value() {
    return this.inner_value
  }

  add(value) {
    this.inner_value += value
    return this
  }

  substract(value) {
    this.inner_value -= value
    return this
  }

  multiply(value) {
    this.inner_value *= value
    return this
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Cannot divide by 0");
    }
    if (this.inner_value === 0) {
      throw new Error("Cannot divide 0 by a number");
    }
    this.inner_value /= value
    return this
  }
}




module.exports = Calculette;

