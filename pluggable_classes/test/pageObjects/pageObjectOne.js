"use strict";

const { Main } = require("./page");

class PageObjectOne extends Main {
  constructor(context, page, ...args) {
    super(context, page, ...args);
    this.prop = "this is class one";
  }

  printOutMessage(message) {
    console.log(message);
  }
}

module.exports = { PageObjectOne };
