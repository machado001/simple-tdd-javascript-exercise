const Tax = require("../src/tax");

const { describe, it } = require("mocha");
const { expect } = require("chai");

const mocks = {
  isInternational: require("./mocks/is-international"),
  isNational: require("./mocks/is-national"),
};

describe("Tax Suite", () => {
  it("should return true if this.international is true", () => {
    const mock = mocks.isInternational;
    const actual = new Tax(mock).isInternational();
    expect(actual).to.be.ok;
  });

  it("should calculate with national tax 1.12 when product is nacional", () => {
    const mock = mocks.isNational;
    const actual = new Tax(mock).calculateTax();

    const expected = 112;
    expect(actual).to.be.deep.equal(expected);
  });

  it(`Should return a string like "The shirts's price with tax is 120." `, () => {
    const mock = mocks.isInternational;
    const actual = new Tax(mock).formateResponse();
    const expected = `The shirts's price with tax is 120.`;
    expect(actual).to.be.deep.equal(expected);
  });
});
