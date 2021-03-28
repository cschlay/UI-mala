describe("Button", () => {
  it("Action", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=general-button--action&viewMode=story"
    );
    cy.screenshot();
  });

  it("Action Disabled", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=general-button--action-disabled&viewMode=story"
    );
    cy.screenshot();
  });

  it("Link", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=general-button--link&viewMode=story"
    );
    cy.screenshot();
  });

  it("Link Disabled", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?id=general-button--link-disabled&viewMode=story"
    );
    cy.screenshot();
  });
});
