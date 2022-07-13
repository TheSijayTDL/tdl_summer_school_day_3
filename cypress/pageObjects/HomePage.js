import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get searchButton() {
    return cy.get("#searchQuery");
  }

  static get searchValue() {
    return cy.get("#mat-input-0");
  }

  static get searchCard() {
    return cy.get(".mat-grid-tile-content");
  }

  static get searchCardCheck() {
    return cy.get(".mat-dialog-content");
  }

  static get searchMultiple() {
    return cy.get(".mat-grid-list");
  }

  static get openReviews() {
    return cy.get(".mat-expansion-panel");
  }

  static get validateReviews() {
    return cy.get(".mat-expansion-panel-content");
  }

  static get typeReviews() {
    return cy.get("[placeholder='What did you like or dislike?']");
  }

  static get submitReview() {
    return cy.get("#submitButton");
  }

  static get changeElements() {
    return cy.get(".mat-select-value");
  }

  static get changeElements2() {
    return cy.get(".mat-select-panel-wrap");
  }

  static get openBasket() {
    return cy.get("[aria-label='Show the shopping cart']");
  }
}

export default HomePage;
