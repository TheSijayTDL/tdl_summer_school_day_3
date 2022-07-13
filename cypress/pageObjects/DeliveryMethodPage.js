import BasePage from '../pageObjects/basePage'

class DeliveryPage extends BasePage {
  static get url () {
    return '/#/delivery-method';
  }

  static get deliveryOption() {
    return cy.get("#mat-radio-43");
  }

  static get deliveryContinue() {
    return cy.get("[aria-label='Proceed to delivery method selection']");
  }
}

export default DeliveryPage;