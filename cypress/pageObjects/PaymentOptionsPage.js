import BasePage from '../pageObjects/basePage'

class PayPage extends BasePage {
  static get url () {
    return '/#/payment/shop';
  }

  static get payChoose() {
    return cy.get("#mat-radio-44");
  }

  static get payContinue() {
    return cy.get("[aria-label='Proceed to review']");
  }
}

export default PayPage;