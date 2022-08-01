const url = "https://www.demoblaze.com/index.html";

describe('Login: web', () => {
  beforeEach(() => {
    cy.visit(url);

  });
  it("Sign up", () => {
    cy.get("#signin2").click();
    cy.get("#sign-username").type("Lourdes");
    cy.wait(500);
    cy.get("#sign-password").type("123456");
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(500);
  })

})