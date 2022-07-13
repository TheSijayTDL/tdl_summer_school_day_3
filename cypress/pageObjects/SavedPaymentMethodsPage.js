import BasePage from '../pageObjects/basePage'

class SavedPaymentPage extends BasePage {
  static get url () {
    return '/#/saved-payment-methods';
  }

  static get addCard() {
    return cy.get(".mat-expansion-panel");
  }

  static get addName() {
    return cy.get("#mat-input-32");
  }
}

export default SavedPaymentPage;