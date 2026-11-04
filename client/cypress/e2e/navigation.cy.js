describe("Navigation Test", () => {
  it("should navigate to projects page", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Projects").click();

    cy.url().should("include", "/projects");
  });
});
