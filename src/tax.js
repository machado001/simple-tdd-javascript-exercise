class Tax {
  #content;
  #tax ;
  constructor( content ) {
    this.#content = content;
    this.#tax = this.isInternational() ? 1.2 : 1.12;

  }
  isInternational() {
    if (!this.#content.international) return false;
    return true;
  }

  calculateTax(){
    return Math.floor(this.#tax * this.#content.value)
  }
   
  formateResponse(){
    return `The ${this.#content.name}'s price with tax is ${this.calculateTax()}.`
  }
}

module.exports = Tax;
