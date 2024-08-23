import "cypress";

describe('login', async () => {
    const username = Cypress.env.username;
    const password = Cypress.env.password;

    it('Logs in', async () => {
        cy.visit("https://demoblaze.com");
        cy.get('#login2').click();
        cy.get('#logInModal').should('be.visible');
        cy.wait(1000);
        cy.get('#loginusername').type(username);
        cy.get('#loginpassword').type(password);
    });
});