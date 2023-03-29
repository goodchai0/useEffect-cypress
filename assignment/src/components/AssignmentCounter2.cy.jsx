import React from "react";
import Counter2 from "./Assignment";

describe("<Counter2 />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter2 />);
  });
  it("when the increment button is pressed, the calculation should be 2", () => {
    cy.mount(<Counter2 />);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=cal-value]").should("have.text", 2);
  });
  it("when the decrement button is pressed, the calculation should be -2", () => {
    cy.mount(<Counter2 />);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=cal-value]").should("have.text", -2);
  });
});
