const Ajv = require("ajv");
const ajv = new Ajv({allErrors: true, verbose: true});

/**
 * @method verifyScheme
 * @param {String} schemeJson
 * @param {String} bodyResponse
 * @param {String} name
 * @returns none
 */
function verifyScheme(schemeJson, bodyResponse, name){
    if(schemeJson){
      cy.fixture(schemeJson).then((JsonFile) => {
        cy.log("Scheme is validated for "+name+" service");
        const validate = ajv.compile(JsonFile);
        const valid = validate(bodyResponse);
        if (!valid) cy.log(JSON.stringify(validate.errors)).then(() => {
          throw new Error('Schema is different');
        });
      });
    }else{
      cy.log("Scheme is not validated for "+name+" service");
    }
  }