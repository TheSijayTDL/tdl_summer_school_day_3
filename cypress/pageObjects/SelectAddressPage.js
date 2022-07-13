import BasePage from '../pageObjects/basePage'

class AddressPage extends BasePage {
  static get url () {
    return '/#/address/select';
  }

  static get selectAddress() {
    return cy.get(".mat-radio-container");
  }

  static get continueAddress() {
    return cy.get("[aria-label='Proceed to payment selection']");
  }
}

export default AddressPage;