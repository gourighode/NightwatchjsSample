const { Given, Then } = require('cucumber');

Given(/^I open the homepage$/, () => {
  console.log("open the browser instance and open sample site")
});

Then(/^I expect the title to be "([^"]*)"$/, (expectedTitle) => {
    console.log("verify page title")
});
