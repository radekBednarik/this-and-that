"use strict";

const { describe, before, after, it } = require("mocha");
const { chromium } = require("playwright");
const { PageObjectOne } = require("../pageObjects/pageObjectOne");
const { PageObjectTwo } = require("../pageObjects/pageObjectTwo");
const { PageObjectThree } = require("../pageObjects/pageObjectThree");

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
    await page.goto("https://www.tesena.com", { waitUntil: "networkidle" });

    pageObject = new PageObjectOne(
      context,
      page,
      { pageObjectTwo: PageObjectTwo },
      { pageObjectThree: PageObjectThree }
    );
  });

  after(async function () {
    await browser.close();
  });

  it("this will print out and pass", async function () {
    console.log(pageObject.pageObjectTwo.prop);
    console.log(pageObject.pageObjectThree.prop);
    pageObject.printOutMessage("Hello!!!!");
    console.log(await pageObject.pageObjectTwo.showPageTitle());
  });
});
