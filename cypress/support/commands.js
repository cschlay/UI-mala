// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "@testing-library/cypress/add-commands";
import { AUTH_TOKEN_NAME } from "../../settings";

Cypress.Commands.add("setUp", () => {
  cy.log("SetUp test user");
  return cy
    .request("http://localhost:8000/test-interface/setup")
    .then((res) => {
      cy.setCookie(AUTH_TOKEN_NAME, res.body.token);
    });
});

Cypress.Commands.add("tearDown", () => {
  cy.log("TearDown test user");
  return cy.request("http://localhost:8000/test-interface/teardown");
});

Cypress.Commands.add("openComponent", (componentId) => {
  return cy.visit(
    `http://localhost:6006/iframe.html?id=${componentId}&viewMode=story`
  );
});
