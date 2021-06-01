"use strict";

const { Main } = require("./page");

class PageComponentOne extends Main {
  constructor(page, ...args) {
    super(page, ...args);
    this.prop = "this is page component one - for example header";
  }
}

module.exports = { PageComponentOne };
