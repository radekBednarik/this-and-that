"use strict";

class Main {
  constructor(context, page, ...args) {
    this.context = context;
    this.page = page;
    this.plugIn(this.context, this.page, args);
  }

  plugIn(context, page, args) {
    for (const arg of args) {
      const [key, value] = Object.entries(arg)[0];
      this[key] = new value(context, page);
    }
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async pageTitle() {
    return await this.page.title();
  }
}

module.exports = { Main };
