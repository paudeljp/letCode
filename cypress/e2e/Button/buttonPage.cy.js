/// <reference types = "cypress"/>

describe("Button page", () => {
  beforeEach(() => {
    cy.visit("https://letcode.in/buttons");
  });
  it("Goto Home and come back here using driver command", () => {
    //Clicking on the Goto Home button to navigate to the home page
    cy.get("#home").click();
    //Using cypress go command to get back from home page
    cy.go("back");
    //Using Assertion to ensure you are back on the initial page
    cy.url().should("eql", "https://letcode.in/buttons");
  });

  it("Get the X & Y co-ordinates", () => {
    cy.get("#position").then(($button) => {
      const x = $button.offset().left;
      const y = $button.offset().top;
      cy.log(`The coordinate of x is ${x}, and coordinate of y is ${y}`);
    });
  });

  it("Find the color of the button", () => {
    cy.get("#color").then(($button) => {
      const backgroundColor = $button.css("background-color");
      cy.log(`The background color is: ${backgroundColor}`);
    });
  });

  it("Find the height & width of the button", () => {
    cy.get("#property").then(($button) => {
      const height = $button.css("height");
      const width = $button.css("width");
      cy.log(`The height of button is ${height} and Weight is ${width}`);
    });
  });

  it("Confirm button is disabled", () => {
    cy.get("#isDisabled").should("have.attr", "disabled");
  });

  it("Click and Hold Button",()=>{
    cy.get("#isDisabled.button.is-primary").then($button => {
      // wrap() is used to bridge the gap between jQuery objects and Cypress chainable objects, enabling you to use Cypress commands on jQuery-selected elements within Cypress tests.
      cy.wrap($button).trigger('mousedown')
      cy.wait(2000)
      cy.wrap($button).trigger('mouseup')
      cy.get("h2").should('have.text','Button has been long pressed')
    })
  })
});
