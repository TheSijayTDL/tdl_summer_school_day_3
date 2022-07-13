import BasePage from '../pageObjects/basePage'

class SavedAddressPage extends BasePage {
  static get url () {
    return '/#/address/saved';
  }

  static get addNewAddress() {
    return cy.get("[aria-label='Add a new address']");
  }
}

export default SavedAddressPage;