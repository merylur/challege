const url = "https://www.demoblaze.com/index.html";

describe('Sign up: web', () => {
  beforeEach(() => {
    cy.visit(url);
  });
  it("Add laptop in the card", () => {
    cy.get('#login2').click();
    cy.wait(500);
    cy.get("#loginusername").type("Lourdes");
    cy.wait(500);
    cy.get("#loginpassword").type("123456");
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);
    cy.get("a").contains('Laptops').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    //cy.wait(500);
    cy.get('.col-sm-12 > .btn').click();
    //cy.wait(500);
    cy.get('#cartur').click();
    //cy.wait(300);
  })

})