let url = 'https://petstore.swagger.io/v2';

describe('Service test', () => {

  it("Add new pets", () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        "id": 7,
        "category": {
          "id": 0,
          "name": "NewPet"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      cy.writeFile(
        'cypress/fixtures/backend/pets.json',
        response.body
      );
      // utils.verifyScheme(schemeJson, response.body, 'cypress/fixtures/backend/pets.json');
    });
  });
  it("Get pets by id", () => {
    let file_name = 'cypress/fixtures/backend/listpets.json';
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/pet/7',
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body);
      cy.writeFile(
        'cypress/fixtures/backend/listpets.json',
        response.body
      );
      // utils.verifyScheme(schemeJson, response.body, file_name);
    });

  });
  it("edit pets", () => {
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        "id": 7,
        "category": {
          "id": 0,
          "name": "Other name"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      },
    }).then((response) => {
      cy.log(response.body);
      expect(response.status).to.eq(200);
      cy.writeFile(
        'cypress/fixtures/backend/pets.json',
        response.body
      );
      // utils.verifyScheme(schemeJson, response.body, 'cypress/fixtures/backend/pets.json');
    });
  });



});
