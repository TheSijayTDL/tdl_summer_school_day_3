import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get regEmail(){
    return cy.get("#emailControl");
  }

  static get regPassword(){
    return cy.get("#passwordControl");
  }

  static get regPasswordValidate(){
    return cy.get("#repeatPasswordControl");
  }

  static get regQuestion(){
    return cy.get(".mat-select-placeholder");
  }

  static get regChooseQuestion(){
    return cy.get("#mat-option-9");
  }

  static get regAnswer(){
    return cy.get("#securityAnswerControl");
  }

  static get regSubmit(){
    return cy.get("#registerButton");
  }
}

export default RegistrationPage;
