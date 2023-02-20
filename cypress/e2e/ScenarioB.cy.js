///<reference types='Cypress'/>
import "cypress-map/commands/map";
import ScenarioB_Obj from "../Pages/ScenarioB";

describe("template spec", () => {
  before(function () {
    cy.fixture("user").then((user) => {
      this.user = user;
    });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC1_Verify user can edit the row in a table", () => {
    ScenarioB_Obj.clkElement().click({ force: true });
    ScenarioB_Obj.clkWebTable().click({ force: true });
    ScenarioB_Obj.secondRow_1().contains("Alden");
    ScenarioB_Obj.EditRecord().click();
    ScenarioB_Obj.txtFirstName().clear().type("Gerimedica");
    ScenarioB_Obj.txtLastName().clear().type("BV");
    ScenarioB_Obj.clkSubmit().click();
    ScenarioB_Obj.secondRow_1().contains("Gerimedica");
    ScenarioB_Obj.secondRow_2().contains("BV");
  });

  it("TC02 - Verify broken image", () => {
    ScenarioB_Obj.clkElement().click({ force: true });
    cy.contains("Broken Links - Images").click();
    cy.get('[src="/images/Toolsqa_1.jpg"]')
      .should("be.visible")
      .should(([img]) => {
        expect(img.naturalWidth).to.eq(0);
      });
  });

  it("TC03 - Verify user can submit the form.", function () {
    ScenarioB_Obj.clkForm();
    ScenarioB_Obj.clkPracticeForm();
    ScenarioB_Obj.txtFirstName().type(this.user.formFirstName);
    ScenarioB_Obj.txtLastName().type(this.user.formLastName);
    ScenarioB_Obj.txtUserEmail().type(this.user.email);
    ScenarioB_Obj.txtUserNumber().type(this.user.mobile);
    //ScenarioB_Obj.txtDateOfBirth().clear(); //.type(this.user.dateOfBirth);
    cy.get("#dateOfBirthInput");
    ScenarioB_Obj.chkGender();
    ScenarioB_Obj.chkHobbies();
    //ScenarioB_Obj.txtSubject().type(this.user.subjects);
    ScenarioB_Obj.txtCurrentAddress().type(this.user.currentAddress);
    ScenarioB_Obj.selectState();
    //cy.contains("NCR").click();
    //ScenarioB_Obj.selectCity();
    //cy.contains("Delhi").click();
  });

  it.only("TC04 - Verify the progress bar", () => {
    cy.contains("Widget").click();
    cy.contains("Progress Bar").click();
    cy.get("#startStopButton").click();
  });
});
