import {
    When, Then
} from "@badeball/cypress-cucumber-preprocessor";

const demoPage = require("../../pages/DemoPage");

When("l'utilisateur accède à la page d'accueil", () => {
    cy.visit('/');
});

When("l'utilisateur se connecte avec le nom d'utilisateur {string} et le mot de passe {string}", (utilisateur, password) => {
    demoPage.verificationEtConnexion(utilisateur, password);
});

When("l'utilisateur clique sur l'article {string}", (article) => {
    Cypress.env("article", article);
    demoPage.clickArticle(article);
});

When("l'utilisateur clique sur add to cart", () => {
    demoPage.clickAddToCart();
});

When("l'utilisateur clique sur le panier", () => {
    demoPage.clickPanier();
});

Then("l'article choisit existe dans le panier", () => {
    demoPage.verifierPanier();
});

