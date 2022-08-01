# Introduction

This Project creates an Automation Testing Environment using Cypress.
It includes reporting tools like Mochawesome and Mocha-Junit-Reporter.

## Folder Structure

- Cypress has its folder in which tests are created:
- - cypress/fixtures
- - cypress/smoke
- - cypress/support

## To Test Json Schemes
1) Use the webPage: https://jsonschema.net/home
2) In the left put the response of the service.
3) In setting disabled: title, description, default, const, examples, enum, additionalProperties, additionalItems, uniqueItems. 
Leave checked: type, required
4) Select "First (single schema)"
5) Identifier Type: "None"
6) Press "Submit" button

To make sure that this generated file is OK:
1) Use the webPage: https://www.jsonschemavalidator.net/
2) In the left put the file generated
3) In the right put the response of the service
4) Make sure that the message: "No errors found. JSON validates against the schema" is displayed.

## To Run Reports  
``` npm run test:report ```