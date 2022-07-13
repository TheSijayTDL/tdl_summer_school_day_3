import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get checkLogin() {
    return cy.get("#login-form");
  }

  static get typeEmail() {
    return cy.get("#email");
  }

  static get typePassword() {
    return cy.get("#password");
  }

  static get typeSubmit() {
    return cy.get("#loginButton");
  }

  static get navBar() {
    return cy.get("#navbarAccount");
  }
}

export default LoginPage;
