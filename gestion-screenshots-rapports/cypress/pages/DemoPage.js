class DemoPage {
    constructor(){
        this.elements = {
            username : () => cy.get('#user-name'),
            password : () => cy.get('#password'),
            login: () => cy.get('#login-button'),
            inventoryItemName: () => cy.get('.inventory_item_name'),
            addToCart: () => cy.get('#inventory_item_container > div > div > div > button'),
            panier: () => cy.get('#shopping_cart_container')
        }
    }
    
    verificationEtConnexion(username, password) {
        cy.get('body').then(($body) => {
            if ($body.find('#login-button').length > 0) {
                this.elements.username().type(username);
                this.elements.password().type(password);
                this.elements.login().click();
            }
        });
    }

    clickArticle(element) {
        this.elements.inventoryItemName().contains(element).click();
    }
    
    clickAddToCart() {
        this.elements.addToCart().click();
    }

    clickPanier(){
        this.elements.panier().click();
    }

    verifierPanier(){
        this.elements.inventoryItemName().contains(Cypress.env('article')).should('not.exist');
    }
}
module.exports = new DemoPage();