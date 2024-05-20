const test = require('node:test');
const assert = require('node:assert');
const {homePageResponse, contactPageResponse } = require("./handlers");

const expectedResults = {
  HOME_PAGE_RESPONSE: "<html><head><title>Home Page</title></head><body>I am in Home page</body></html>",
  CONTACT_PAGE_RESPONSE: "<html><head><title>Contact Page</title></head><body>Contact @ thazhal software</body></html>"
}

test("should return home page response", (t) => {
  assert.equal(homePageResponse(), expectedResults.HOME_PAGE_RESPONSE);
});

test("should return contact page response", (t) => {
  assert.equal(contactPageResponse(), expectedResults.CONTACT_PAGE_RESPONSE);
});