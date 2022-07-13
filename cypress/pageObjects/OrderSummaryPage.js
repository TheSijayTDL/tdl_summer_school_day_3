import BasePage from '../pageObjects/basePage'

class SumPage extends BasePage {
  static get url () {
    return '/#/order-summary';
  }

  static get summaryShow() {
    return cy.get("[aria-label='Complete your purchase']");
  }
}

export default SumPage;