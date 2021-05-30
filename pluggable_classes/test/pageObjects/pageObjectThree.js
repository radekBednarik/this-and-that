"use strict";

const { Main } = require("./page");

class PageObjectThree extends Main {
  constructor(context, page, ...args) {
    super(context, page, ...args);
    this.prop = "this is class three";
  }
}

module.exports = { PageObjectThree };
