let username = "lambdaTester";
let password = "Tester01";

describe("Login flow", () => {
  it("should allow the user to log in with valid credentials", () => {
    // Arrange
    cy.visit("https://www.demoblaze.com/");
    cy.get("#login2").click();
    cy.get("#logInModal").should("be.visible");
    cy.get("#loginusername").should("be.empty");
    cy.get("#loginpassword").should("be.empty");
  
    // Act
    cy.get("#loginusername").clear().type(username, { delay: 50 });
    cy.get("#loginpassword").clear().type(password, { delay: 50 });
    cy.get(".btn-primary").contains("Log in").click();

    // Assert
    cy.get("#nameofuser").should("contain", username);
    cy.get("#logout2").should("contain", "Log out");
  });
});
