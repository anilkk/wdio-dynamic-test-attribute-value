const assert = require("assert");
const SEARCH_RESULT_SELECTOR = '[e2e-test-selector="search-results-number"]';
const BUTTON_25_RESULT_SELECTOR = '[e2e-test-selector="btn-25-results"]';
const BUTTON_50_RESULT_SELECTOR = '[e2e-test-selector="btn-50-results"]';
const SEARCH_RESULT_VALUE_ATTRIBUTE = "e2e-test-results-value";
const checkSearchResultsCount = async expectedCount => {
  const results = await $(SEARCH_RESULT_SELECTOR);
  const resultsCount = await results.getAttribute(
    SEARCH_RESULT_VALUE_ATTRIBUTE
  );
  assert.strictEqual(parseInt(resultsCount), expectedCount);
};
describe("Dynamic test data attribute value page", async () => {
  beforeEach(async () => {
    await browser.url("https://llyzf.csb.app/");
  });
  it("should show zero as initial results", async () => {
    await checkSearchResultsCount(0);
  });
  it("should show 25 as results when user selects to show 25 results", async () => {
    const btn25Result = await $(BUTTON_25_RESULT_SELECTOR);
    await btn25Result.click();
    await checkSearchResultsCount(25);
  });
  it("should show 50 as results when user selects to show 50 results", async () => {
    const btn25Result = await $(BUTTON_50_RESULT_SELECTOR);
    await btn25Result.click();
    await checkSearchResultsCount(50);
  });
});
