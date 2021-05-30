"use strict";

const { Main } = require("./page");

class PageComponentOne extends Main {
  constructor(context, page, ...args) {
    super(context, page, ...args);
    this.prop = "this is page component one - for example header";
  }
}

module.exports = { PageComponentOne };
