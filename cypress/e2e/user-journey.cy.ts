// User Journey - Testing Your First Application
describe("User Journey - Testing Your First Application", () => {
    it("a user can find the Testing Your First Application-course on the home page and complete the courses lessons", () => {
      cy.visit("http://localhost:3000")
      cy.getByData("course-0").find("a").contains('Get started').click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
      cy.getByData("next-lesson-button").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/app-install-and-overview"
      )
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
      )
    })

})
  
// User Journey - Testing Foundations
describe("User Journey - Testing Foundations", () => {
    it("a user can find the Testing Foundations-course on the home page and complete the courses lessons", () => {
      cy.visit("http://localhost:3000")
      cy.getByData("course-1").find("a").contains('Get started').click() 
      cy.location("pathname").should("equal", "/testing-foundations")
      cy.getByData("next-lesson-button").click()
      cy.location("pathname").should(
        "eq",
        "/testing-foundations/testing-is-a-mindset"
      )
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/testing-foundations/knowing-what-to-test"
      )
    })
  })
  
  // User Journey - Cypress Fundamentals
  describe("User Journey - Cypress Fundamentals", () => {
    it("a user can find the Cypress Fundamentals-course on the home page and complete the courses lessons", () => {
      cy.visit("http://localhost:3000")
      cy.getByData("course-2").find("a").contains('Get started').click() 
      cy.location("pathname").should("equal", "/cypress-fundamentals")
      cy.getByData("next-lesson-button").click()
      cy.location("pathname").should(
        "eq",
        "/cypress-fundamentals/how-to-write-a-test"
      )
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/cypress-fundamentals/cypress-runs-in-the-browser"
      )
    })
  })
  