Feature: Demo Feature

Scenario: Demo Scenario
    When l'utilisateur accède à la page d'accueil
    And l'utilisateur se connecte avec le nom d'utilisateur "standard_user" et le mot de passe "secret_sauce"
    And l'utilisateur clique sur l'article "Sauce Labs Backpack"
    And l'utilisateur clique sur add to cart
    And l'utilisateur clique sur le panier
    Then l'article choisit existe dans le panier