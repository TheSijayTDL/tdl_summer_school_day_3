import BasketPage from "../pageObjects/BasketPage";
import CreateAddressPage from "../pageObjects/CreateAddressPage";
import DeliveryPage from "../pageObjects/DeliveryMethodPage";
import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import CompPage from "../pageObjects/OrderCompletionPage";
import SumPage from "../pageObjects/OrderSummaryPage";
import PayPage from "../pageObjects/PaymentOptionsPage";
import RegistrationPage from "../pageObjects/RegistrationPage";
import SavedAddressPage from "../pageObjects/SavedAddressesPage";
import SavedPaymentPage from "../pageObjects/SavedPaymentMethodsPage";
import AddressPage from "../pageObjects/SelectAddressPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    // Click Account button
    // Click Login button
    // Set email value to "demo"
    // Set password value to "demo"
    // Click Log in
    // Click Account button
    // Validate that "demo" account name appears in the menu section
    HomePage.accountButton.click();
    HomePage.loginButton.click();
    LoginPage.checkLogin.should("be.visible");
    LoginPage.typeEmail.type("demo");
    LoginPage.typePassword.type("demo");
    LoginPage.typeSubmit.should("be.visible").click();
    LoginPage.navBar.click()
      .get("#mat-menu-panel-0")
      .contains("demo")
      .should("be.visible");
  });

  it("Registration", () => {
    // Click Account button
    HomePage.accountButton.click();
    // Login button
    HomePage.loginButton.click();
    LoginPage.checkLogin.should("be.visible");
    // Click "Not yet a customer?"
    LoginPage.startRegistration.click();
    // Find - how to generate random number in JS
    function getRandom(max) {
      return Math.floor(Math.random() * max);
    }
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    let email = "email_" + getRandom(9999) + "@gmail.com";
    RegistrationPage.regEmail.type(email);
    // Fill in password field and repeat password field with same password
    let password = "password";
    RegistrationPage.regPassword.type(password);
    RegistrationPage.regPasswordValidate.type(password);
    // Click on Security Question menu
    RegistrationPage.regQuestion.click();
    // Select  "Name of your favorite pet?"
    RegistrationPage.regChooseQuestion
      .trigger("mousedown")
      .contains("Name of your favorite pet?")
      .click();
    // Fill in answer
    RegistrationPage.regAnswer.type("Test");
    // Click Register button
    RegistrationPage.regSubmit
      .should("be.visible")
      .click();
    // Set email value to previously created email
    LoginPage.checkLogin.should("be.visible");
    LoginPage.typeEmail.type(email);
    // Set password value to previously used password value
    LoginPage.typePassword.type(password);
    // Click login button
    LoginPage.typeSubmit.should("be.visible").click();
    // Click Account button
    // Validate that account name (with previously created email address) appears in the menu section
    LoginPage.navBar.click()
      .get("#mat-menu-panel-0")
      .contains(email)
      .should("be.visible");
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Lemon
    HomePage.searchValue
      .should("be.visible")
      .type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.searchCard.should("be.visible").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.searchCardCheck
      .should("be.visible")
      .contains("Sour but full of vitamins.");
  });

  it("Search 500ml and validate Lemon", () => {
  // Create scenario - Search 500ml and validate Lemon, while having multiple cards
  // Click on search icon
    HomePage.searchButton.click();
  // Search for 500ml
    HomePage.searchValue
      .should("be.visible")
      .type("500ml{enter}");
  // Select a product card - Lemon Juice (500ml)
  // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.searchMultiple
      .contains("Lemon Juice (500ml)")
      .click();
    HomePage.searchCardCheck
      .should("be.visible")
      .contains("Sour but full of vitamins.");
  });

  it("Search 500ml and validate cards", () => {
  // Create scenario - Search 500ml and validate cards
  // Click on search icon
    HomePage.searchButton.click();
  // Search for 500ml
    HomePage.searchValue
      .should("be.visible")
      .type("500ml{enter}");
  // Select a product card - Eggfruit Juice (500ml)
    HomePage.searchMultiple
      .contains("Eggfruit Juice (500ml)")
      .click();
  // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.searchCardCheck
      .should("be.visible")
      .contains("Now with even more exotic flavour.");
  // Close the card
    HomePage.searchCardCheck
      .go("back");
  // Select a product card - Lemon Juice (500ml)
    HomePage.searchMultiple
      .should("be.visible")
      .contains("Lemon Juice (500ml)")
      .click();
  // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.searchCardCheck
      .should("be.visible")
      .contains("Sour but full of vitamins.");
  // Close the card
    HomePage.searchCardCheck
      .go("forward");
  // Select a product card - Strawberry Juice (500ml)
    HomePage.searchMultiple
      .should("be.visible")
      .contains("Strawberry Juice (500ml)")
      .click();
  // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.searchCardCheck
      .should("be.visible")
      .contains("Sweet & tasty!");
  });

  it("Read a review", () => {
  // Create scenario - Read a review
  // Click on search icon
    HomePage.searchButton.click();
  // Search for King
    HomePage.searchValue.type("King{enter}");
  // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.searchMultiple
      .contains('OWASP Juice Shop "King of the Hill" Facemask')
      .click();
  // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.openReviews.click().wait(1500);
  // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.validateReviews
      .contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it("Add a review", () => {
  // Create scenario - Add a review
  // Click on search icon
    HomePage.searchButton.click();
  // Search for Raspberry
    HomePage.searchValue.type("Raspberry{enter}");
  // Select a product card - Raspberry Juice (1000ml)
    HomePage.searchMultiple
      .contains("Raspberry Juice (1000ml)")
      .click();
  // Type in review - "Tastes like metal"
    HomePage.typeReviews
    .click()
    .type("Tastes like metal{enter}");
  // Click Submit
    HomePage.submitReview.click();
  // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.openReviews.click().wait(1500);
  // Validate review -  "Tastes like metal"
    HomePage.validateReviews
      .contains("Tastes like metal");
  });

  it("Validate product card amount", () => {
  // Create scenario - Validate product card amount
  // Validate that the default amount of cards is 12
    HomePage.searchMultiple
      .should("have.css", "padding-bottom", "1545.99px");
  // Change items per page (at the bottom of page) to 24
    HomePage.changeElements.click();
    HomePage.changeElements2
      .contains("24")
      .click();
  // Validate that the amount of cards is 24
    HomePage.searchMultiple
      .should("have.css", "padding-bottom", "3121.99px")
      .and("include.text", "OWASP Juice Shop T-Shirt");
  // Change items per page (at the bottom of page) to 36
    HomePage.changeElements.click();
    HomePage.changeElements2
      .contains("36")
      .click();  
  // Validate that the amount of cards is 35
    HomePage.searchMultiple
      .should("have.css", "padding-bottom", "4698px")
      .and("include.text", 'Woodruff Syrup "Forest Master X-Treme"');
  });

  it("Buy Girlie T-shirt", () => {
  // Create scenario - Buy Girlie T-shirt
  // Click on search icon
    HomePage.searchButton.click();
  // Search for Girlie
    HomePage.searchValue.type("Girlie{enter}");
  // Add to basket "Girlie"
    HomePage.searchMultiple
    .contains("Add to Basket")
    .click();
  // Click on "Your Basket" button
    HomePage.openBasket.click();
  // Create page object - BasketPage
  // Click on "Checkout" button
    BasketPage.checkoutButton.click();
  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
    AddressPage.selectAddress
      .should("be.visible")
      .click();
  // Click Continue button
    AddressPage.continueAddress.click();
  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
    DeliveryPage.deliveryOption.click();
  // Click Continue button
    DeliveryPage.deliveryContinue.click();
  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
    PayPage.payChoose.click();
  // Click Continue button
    PayPage.payContinue.click();
  // Create page object - OrderSummaryPage
  // Click on "Place your order and pay"
    SumPage.summaryShow.click();
  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!"
    CompPage.validateMessage
      .should("include.text", "Thank you for your purchase!");
  });

  it("Add address", () => {
  // Create scenario - Add address
  // Click on Account
  // Click on Orders & Payment
  // Click on My saved addresses
    HomePage.accountButton.click()
      .get(".mat-menu-panel")
      .contains("Orders & Payment")
      .click()
      .get("#mat-menu-panel-3")
      .contains("My saved addresses")
      .click();
  // Create page object - SavedAddressesPage
  // Click on Add New Address
    SavedAddressPage.addNewAddress.click();
  // Create page object - CreateAddressPage
  // Fill in the necessary information
    CreateAddressPage.addCountry.type("Latvia");
    CreateAddressPage.addName.type("Ruslans");
    CreateAddressPage.addPhone.type("12345678");
    CreateAddressPage.addZip.type("LV-3601");
    CreateAddressPage.addAddress.type("Pils street 45");
    CreateAddressPage.addCity.type("Ventspils");
  // Click Submit button
    CreateAddressPage.submitInfo.click();
  // Validate that previously added address is visible
    CreateAddressPage.checkInfo
      .should("include.text", "Latvia")
      .and("include.text", "Ruslans")
      .and("include.text", "12345678")
      .and("include.text", "LV-3601")
      .and("include.text", "Pils street 45")
      .and("include.text", "Ventspils");
  });

  it.only("Add payment option", () => {
  // Create scenario - Add payment option
  // Click on Account
  // Click on Orders & Payment
  // Click on My payment options
    HomePage.accountButton.click()
      .get(".mat-menu-panel")
      .contains("Orders & Payment")
      .click()
      .get("#mat-menu-panel-3")
      .contains("My Payment Options")
      .click();
  // Create page object - SavedPaymentMethodsPage
  // Click Add new card
    SavedPaymentPage.addCard.click();
  // Fill in Name
    SavedPaymentPage.addName
    .contains("Name")
    .type("test", { force: true });
  // Fill in Card Number
  // Set expiry month to 7
  // Set expiry year to 2090
  // Click Submit button
  // Validate that the card shows up in the list
  });
});
