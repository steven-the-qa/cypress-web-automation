import "cypress";

describe('login', async () => {
    it('Logs in', async () => {
        cy.visit("https://demoblaze.com");
        cy.get('#login2').click();
    });
})