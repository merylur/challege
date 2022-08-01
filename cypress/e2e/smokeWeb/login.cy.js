const url = "https://www.demoblaze.com/index.html";

describe('Sign up: web', () => {
  beforeEach(() => {
    cy.visit(url);
  });
  it("Login", () => {
    cy.get('#login2').click();
    cy.wait(500);
    cy.get("#loginusername").type("Lourdes");
    cy.wait(500);
    cy.get("#loginpassword").type("123456");
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);
  })
})

