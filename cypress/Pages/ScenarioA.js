class ScenarioA_Obj {
  clkElement() {
    return cy.get(":nth-child(1)>:nth-child(1)>.card-up");
  }
  clkWebTable() {
    return cy.get(
      ":nth-child(1) > .element-list > .menu-list > #item-3 > .text"
    );
  }
  clkAddButton() {
    return cy.get("#addNewRecordButton");
  }
  enterFirstName() {
    return cy.get("#firstName");
  }
  enterLastName() {
    return cy.get("#lastName");
  }
  enterUserEmail() {
    return cy.get("#userEmail");
  }
  enterAge() {
    return cy.get("#age");
  }
  enterSalary() {
    return cy.get("#salary");
  }
  enterDepartment() {
    return cy.get("#department");
  }
  clkSubmit() {
    return cy.get("#submit");
  }
  EditRecord() {
    return cy.get("#edit-record-2>svg");
  }
  secondRow_1() {
    return cy.get(":nth-child(2) > .rt-tr > :nth-child(1)");
  }
  secondRow_2() {
    return cy.get(":nth-child(2) > .rt-tr > :nth-child(2)");
  }
}
export default new ScenarioA_Obj();
