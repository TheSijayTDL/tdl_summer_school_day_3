import BasePage from '../pageObjects/basePage'

class SavedPaymentPage extends BasePage {
  static get url () {
    return '/#/saved-payment-methods';
  }

  static get addCard() {
    return cy.get(".mat-expansion-panel");
  }

  static get addName() {
    return cy.get("#mat-input-1");
  }

  static get addCardNumber() {
    return cy.get("#mat-input-2");
  }

  static get addExpiryMonth() {
    return cy.get("#mat-input-3");
  }

  static get addExpiryYear() {
    return cy.get("#mat-input-4");
  }

  static get validateCard() {
    return cy.get("[class*='mat-row cdk-row ng-star-inserted']");
  }
}

export default SavedPaymentPage;