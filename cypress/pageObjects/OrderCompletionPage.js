import BasePage from '../pageObjects/basePage'

class CompPage extends BasePage {
  static get url () {
    return '/#/order-summary';
  }

  static get validateMessage() {
    return cy.get(".mat-card");
  }
}

export default CompPage;