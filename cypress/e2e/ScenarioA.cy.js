///<reference types='Cypress'/>
import "cypress-map/commands/map";
import ScenarioA_Obj from "../Pages/ScenarioA";

describe("template spec", () => {
  before(function () {
    cy.fixture("user").then((user) => {
      this.user = user;
    });
  });
  beforeEach(() => {});

  it("TC1_Verify user can enter new data into the table", function () {
    cy.visit("/");
    ScenarioA_Obj.clkElement().click({ force: true });
    ScenarioA_Obj.clkWebTable().click({ force: true });
    ScenarioA_Obj.clkAddButton().click();
    ScenarioA_Obj.enterFirstName().type(this.user.firstName);
    ScenarioA_Obj.enterLastName().type(this.user.lastName);
    ScenarioA_Obj.enterUserEmail().type(this.user.email);
    ScenarioA_Obj.enterAge().type(this.user.age);
    ScenarioA_Obj.enterSalary().type(this.user.salary);
    ScenarioA_Obj.enterDepartment().type(this.user.department);
    ScenarioA_Obj.clkSubmit().click();
  });
});
