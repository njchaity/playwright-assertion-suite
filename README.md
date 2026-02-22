# Playwright Assertion Suite

A dedicated test suite built with Playwright to demonstrate and practice various assertion techniques commonly used in real-world test automation.

## Assertions Covered

### Page Validations
- `toHaveURL()` - Validates the page has the expected URL
- `toHaveTitle()` - Validates the page has the correct title
- Response status code check using `request.get()`

### Visibility Assertions
- `toBeVisible()` - Checks if an element is visible on the page
- `toBeHidden()` - Checks if an element is hidden

### Element State Assertions
- `toBeChecked()` - Validates checkbox is checked
- `toBeEnabled()` - Validates element is enabled
- `toBeDisabled()` - Validates element is disabled

### Text & Value Assertions
- `toHaveText()` - Validates exact text of an element
- `toContainText()` - Validates element contains partial text
- `toHaveValue()` - Validates input field value
- `toHaveAttribute()` - Validates element attribute and its value
- `toHaveCount()` - Validates number of matching elements

### Soft Assertions
- `expect.soft()` - Continues test execution even after assertion failure

## Tech Stack
- Playwright
- JavaScript
- Node.js
