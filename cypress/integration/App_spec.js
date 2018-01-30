/* disable eslint */

describe("App.js", () => {
  context("test offline-forum", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      // cy.get('article').as('post');
    });

    it("test articles length", () => {
      cy.get("article").should("have.length", 3);
    });
    it("test form, create new post", () => {
      cy.get("#title").type("Hallo");
      cy.get("#content").type("test");
      cy
        .get("form")
        .first()
        .wait(1000)
        .submit();
      cy
        .get("article")
        .first()
        .should("contain", "Hallo");
      cy.get("#comment").type("haa");
      cy
        .get("article")
        .first()
        .parent()
        .find("form")
        .wait(1000)
        .submit();
      cy.get("article").should("have.length", 4);
    });

    it("change page to bot", () => {
      cy
        .get('[data-test="button"]')
        .wait(1000)
        .click();
      cy
        .get("input")
        .first()
        .type("Hej jesper");
      cy.get("form").submit();
      cy
        .get('[data-test="button"]')
        .wait(1000)
        .click();
    });

    it("change page to home", () => {
      cy
        .get('[data-test="button"]')
        .wait(1000)
        .click();
    });

    it("check articles length", () => {
      cy.get("article").should("have.length", 3);
    });

    it("change user and remove post", () => {
      cy.get("select").select("Morgana");
      cy
      .get("button")
      .last()
      .click();
    cy.get("article").should("have.length", 2);
    });
   
  });
});
