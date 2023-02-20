class ScenarioB_Obj {
  clkElement() {
    return cy.get(":nth-child(1)>:nth-child(1)>.card-up");
  }
  clkWebTable() {
    return cy.get(
      ":nth-child(1) > .element-list > .menu-list > #item-3 > .text"
    );
  }
  txtFirstName() {
    return cy.get("#firstName");
  }
  txtLastName() {
    return cy.get("#lastName");
  }
  txtUserEmail() {
    return cy.get("#userEmail");
  }
  txtUserNumber() {
    return cy.get("#userNumber");
  }
  txtDateOfBirth() {
    return cy.get("#dateOfBirthInput");
  }
  chkGender() {
    cy.get("#gender-radio-1").check({ force: true });
  }
  txtSubject() {
    return cy.get("#subjectsContainer");
  }
  chkHobbies() {
    cy.get("#hobbies-checkbox-2").check({ force: true });
  }
  clkPicture() {
    cy.get("#uploadPicture");
  }
  txtCurrentAddress() {
    return cy.get("#currentAddress");
  }
  selectState() {
    cy.get("#state").click({ force: true });
  }
  clkForm() {
    cy.contains("Forms").click();
  }
  clkPracticeForm() {
    cy.contains("Practice Form").click();
  }
  selectCity() {
    cy.get("#city").click({ force: true });
  }
  clkSubmit() {
    return cy.get("#submit");
  }
  editRecord() {
    return cy.get("#edit-record-2>svg");
  }
  secondRow_1() {
    return cy.get(":nth-child(2) > .rt-tr > :nth-child(1)");
  }
  secondRow_2() {
    return cy.get(":nth-child(2) > .rt-tr > :nth-child(2)");
  }
}
export default new ScenarioB_Obj();
