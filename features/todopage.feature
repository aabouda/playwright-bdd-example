Feature: Todo List Management

  Background:
    Given I am on the Todo page

  Scenario: Create a new todo item
    When I create a new todo item with text "Buy groceries"
    Then I should see the following todo items:
      | Buy groceries   |

  Scenario: Complete a todo item
    When I create a new todo item with text "Read a book"
    And I complete the todo item with text "Read a book"
    Then I should see the following todo items:
      | Read a book   |

  Scenario: Filter completed items
    When I create a new todo item with text "Walk the dog"
    And I create a new todo item with text "Water the plants"
    And I complete the todo item with text "Walk the dog"
    And I filter to see only completed items
    Then I should see the following todo items:
      | Walk the dog   |

  Scenario: Filter completed items with multiple completed items
    When I create a new todo item with text "Go for a run"
    And I create a new todo item with text "Write code"
    And I complete the todo item with text "Go for a run"
    And I complete the todo item with text "Write code"
    And I filter to see only completed items
    Then I should see the following todo items:
      | Go for a run   |
      | Write code     |
