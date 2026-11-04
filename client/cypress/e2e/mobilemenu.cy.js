describe("Mobile menu", () => {
  it("opens the mobile menu", () => {
    cy.viewport(500, 800);

    cy.visit("http://localhost:5173");

    cy.get(".menu-btn").click();

    cy.get(".nav-links").should("have.class", "active");
  });
});
