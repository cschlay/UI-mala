describe("Button", () => {
  it("Action", () => {
    cy.openComponent("general-button--action");
    cy.screenshot();
  });

  it("Action Disabled", () => {
    cy.openComponent("general-button--action-disabled");
    cy.screenshot();
  });

  it("Link", () => {
    cy.openComponent("general-button--link");
    cy.screenshot();
  });

  it("Link Disabled", () => {
    cy.openComponent("general-button--link-disabled");
    cy.screenshot();
  });
});
