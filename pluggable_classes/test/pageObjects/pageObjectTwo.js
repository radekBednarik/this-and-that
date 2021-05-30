"use strict";

const { Main } = require("./page");

class PageObjectTwo extends Main {
  constructor(context, page, ...args) {
    super(context, page, ...args);
    this.prop = "this is class two";
  }

  async showPageTitle() {
    return await this.page.title();
  }
}

module.exports = { PageObjectTwo };
