import { Page, expect } from '@playwright/test';
import { Given, When, Then, Fixture } from 'playwright-bdd/decorators';
import { DataTable } from '@cucumber/cucumber';

export @Fixture('todoPage') class TodoPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  @Given('I am on the Todo page')
  async navigateToTodoPage() {
    await this.page.goto('https://demo.playwright.dev/todomvc/#/');
  }

  @When('I create a new todo item with text {string}')
  async createTodoItem(text: string) {
    await this.page.getByPlaceholder('What needs to be done?').fill(text);
    await this.page.getByPlaceholder('What needs to be done?').press('Enter');
  }

  @When('I complete the todo item with text {string}')
  async completeTodoItem(text: string) {
    await this.page.getByTestId('todo-item').filter({ hasText: text }).getByLabel('Toggle Todo').check();
  }

  @When('I filter to see only completed items')
  async filterCompletedItems() {
    await this.page.getByRole('link', { name: 'Completed' }).click();
  }

  @Then('I should see the following todo items:')
  async verifyTodoItemsVisible(itemList: DataTable) {
    await expect(this.page.getByTestId('todo-title')).toHaveText(itemList.raw().flat());
  }
}