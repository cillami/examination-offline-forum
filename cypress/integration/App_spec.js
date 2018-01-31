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
      cy.get("#title").type("Title new post");
      cy.get("#content").type("Content new post");
      cy
        .get("form")
        .first()
        .wait(4000)
        .submit();
      cy
        .get("article")
        .first()
        .should("contain", "Title new post");
      cy.get("#comment").type("This is my comment");
      cy
        .get("article")
        .first()
        .next()
        .find("form")
        .wait(4000)
        .submit()
        .wait(6000)
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
        .type("What time is it?");
      cy.get("form").submit();
      cy
        .get('[data-test="button"]')
        .wait(4000)
        .click();
    });

    it("change page to home", () => {
      cy
        .get('[data-test="button"]')
        .wait(4000)
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
