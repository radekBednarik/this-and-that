"use strict";

const { describe, before, after, it } = require("mocha");
const { chromium } = require("playwright");
const { PageObject } = require("../pageObjects/pageObject.page");
const { PageComponentOne } = require("../pageObjects/pageComponentOne");
const { PageComponentTwo } = require("../pageObjects/pageComponentTwo");

describe("We can plug classes dynamically", function () {
  let browser;
  let context;
  let page;
  let pageObject;

  before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });
    page = await context.newPage();

    pageObject = new PageObject(
      context,
      page,
      { componentOne: PageComponentOne },
      { componentTwo: PageComponentTwo }
    );

    await pageObject.goto("https://www.tesena.com/en")
  });

  after(async function () {
    await browser.close();
  });

  it("this will print out and pass", async function () {
    console.log(pageObject.componentOne.prop);
    console.log(pageObject.componentTwo.prop);
    pageObject.printOutMessage("Hello!!!!");
    console.log(await pageObject.pageTitle());
  });
});
