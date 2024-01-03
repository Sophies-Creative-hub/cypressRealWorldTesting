describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("Hero section", () => {
    // Hero section tests
    it("the h1 contains the correct text", () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress");
    });
  });

  context("Courses section", () => {
    // Courses section tests
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses");
      cy.get("dt").eq(1).contains("25+ Lessons");
      cy.get("dt").eq(2).contains("Free and Open Source");
    });

    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").contains("Get started").click();
      cy.location("pathname").should("equal", "/testing-your-first-application");
    });
  
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").contains("Get started").click();
      cy.location("pathname").should("equal", "/testing-foundations");
    });

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").contains("Get started").click();
      cy.location("pathname").should("equal", "/cypress-fundamentals");
    });

  
  });
});
