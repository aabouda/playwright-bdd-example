# playwright-bdd-example

Example project that uses [playwright-bdd](https://github.com/vitalets/playwright-bdd) to run BDD tests. This [`ai` branch](https://github.com/vitalets/playwright-bdd-example/tree/ai) contains feature and step definitions originally generated by [ChatGPT](https://chat.openai.com). 

## ChatGPT prompts

### Get step definitions class
```
Create Page Object Model 'TodoPage' in Typescript
for the following feature:

As a user I want to manage items in todo list: 
create items, complete items and filter to see only completed items.

Use page from '@playwright/test' as constructor parameter.
Use Given, When, Then from 'playwright-bdd/decorators' as BDD decorators, for example: @Given('pattern {string}').
Don't fill methods body.
```

### Get BDD scenarios
```
Generate BDD scenarios as a single Gherkin file strictly using
only the following steps:

* Given I am on the Todo page
* When I create a new todo item with text {string}
* When I complete the todo item with text {string}
* When I filter to see only completed items
* Then I should see the following todo items:
```

## How to run it locally

1. Clone repo
   ```
   git clone --branch ai https://github.com/vitalets/playwright-bdd-example.git
   ```

2. CD into directory
   ```
   cd playwright-bdd-example
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Install browsers
   ```
   npx playwright install
   ```

4. Run tests
   ```
   npm test
   ```
   Output:
   ```
   Running 2 tests using 1 worker
   2 passed (2.3s)
   ```

5. Check out the report
   ```
   npm run report
   ```
   <details>
     <summary>Report</summary>
     <img src="https://github.com/vitalets/playwright-bdd/assets/1473072/4e2e4803-118a-40bd-a583-7dbe93b9ffd2"/>
   </details>

