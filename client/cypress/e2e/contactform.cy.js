describe("Contact form", () => {
  it("submits the form", () => {
    cy.visit("http://localhost:5173/contact");

    cy.get("input[name=name]").type("John Doe");

    cy.get("input[name=email]").type("john@email.com");

    cy.get("textarea[name=message]").type("Hello there");

    cy.get("button[type=submit]").click();

    cy.contains("Message sent");
  });
});
