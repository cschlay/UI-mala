describe("/login page", () => {
  it("should have a form to accept username and password", () => {
    cy.visit("/login");
    cy.get("#form__login-username").type("alice");
    cy.get("#form__login-password").type("alice");
    cy.screenshot();

    cy.findByRole("button", {
      name: /sign in/i,
    }).click();
  });
});
