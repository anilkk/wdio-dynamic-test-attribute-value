# wdio-dynamic-test-attribute-value

Demo of (WebdriverIO)[https://webdriver.io/] automation test example using dynamic end-to-end test attribute value for checking the result.

End to end test attribute `e2e-test-results-value` is used for checking the reuslt.

```
<h3 class="e2e-test-results" e2e-test-selector="search-results-number" e2e-test-results-value="0">0 results</h3>
```

![e2e-test-results-value demo](https://raw.githubusercontent.com/anilkk/wdio-dynamic-test-attribute-value/master/img/e2e-test-attribute-value.png "End to end test attribute use demo")

This repo tests the [Dynamic test data attribute demo](https://llyzf.csb.app/) application.
Here is the [Github link to this demo](https://github.com/anilkk/dynamic-e2e-test-attribute-value-demo).

### Steps to run the automation tests

1. Install dependency
   `npm install`

2. Run the WebdriverIo automation test
   `npm test`

### Use of end to end test attribute for DOM selector

```Javascript
// on the demo application
    <Button
        variant="primary"
        e2e-test-selector="btn-25-results"
        onClick={() => {
            handleClick(25);
        }}
        >
        Change results value to 25
    </Button>

// on the WebdriverIo automation code
const BUTTON_25_RESULT_SELECTOR = '[e2e-test-selector="btn-25-results"]';
const btn25Result = await $(BUTTON_25_RESULT_SELECTOR);
```

### Use of end to end test attribute for checking dynamic value

```Javascript
// on the demo application
    <h3
        className="e2e-test-results"
        e2e-test-selector="search-results-number"
        e2e-test-results-value={count}
        >
        {count} results
    </h3>

// on the WebdriverIo automation code
const SEARCH_RESULT_SELECTOR = '[e2e-test-selector="search-results-number"]';
const SEARCH_RESULT_VALUE_ATTRIBUTE = "e2e-test-results-value";
const results = await $(SEARCH_RESULT_SELECTOR);
const resultsCount = await results.getAttribute(
    SEARCH_RESULT_VALUE_ATTRIBUTE
  );
```
