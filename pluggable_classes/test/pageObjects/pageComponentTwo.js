"use strict";

const { Main } = require("./page");

class PageComponentTwo extends Main {
  constructor(page, ...args) {
    super(page, ...args);
    this.prop = "this is page component two - for example footer";
  }
}

module.exports = { PageComponentTwo };
