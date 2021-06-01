"use strict";

class Main {
  constructor(page, ...args) {
    this.page = page;
    this.context = this.page.context();
    this._plugIn(this.page, args);
  }

  _plugIn(page, args) {
    if (args.length > 0) {
      for (const arg of args) {
        const [key, value] = Object.entries(arg)[0];
        this[key] = new value(page);
      }
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
