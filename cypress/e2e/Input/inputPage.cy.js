/// <reference types="cypress" />
require("cypress-plugin-tab");

describe("Interact with Inputs", () => {
  beforeEach(() => {
    cy.visit("https://letcode.in/edit");
  });
  it("Enter your full Name", () => {
    cy.get("#fullName")
      .type("Jeevan Paudel");
    //Asserting
    cy.get("#fullName")
      .should("have.value", "Jeevan Paudel");
  });
  it("Append a text and press keyboard tab", () => {
    cy.get("#join")
      .type(", thank you");
    //Asserting
    cy.get("#join")
      .should("have.value", "I am good, thank you");
    //Cypress doesn't have a built-in .tab() function to simulate pressing the Tab key. Instead, you can use the .trigger() function to trigger keyboard events.
    //cy.get("#join").trigger("keydown", { keyCode: 9, which: 9 });
    cy.get("#join")
      .tab(); //A Cypress plugin to add a tab command
    cy.get("#getMe")
      .should("be.focused");
  });

  it("What is inside the text box", () => {
    cy.get("#getMe")
      .should("have.value", "ortonikc");
  });

  it("Clear the text", () => {
    cy.get("#clearMe")
      .clear();
  });

  it("Confirm edit field is disabled", () => {
    cy.get("#noEdit")
      .should("be.disabled");
  });

  it("Confirm text is readonly", () => {
    cy.get("#dontwrite")
      .should("have.attr", "readonly");
  });
});

//Plugin source to handle tab : https://github.com/kuceb/cypress-plugin-tab/blob/master/README.md
