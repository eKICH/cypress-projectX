import loginPage from '../pages/login.page.cy'
import dashboard from '../pages/dashboard.page.cy'
import addEmployee from '../pages/addEmployee.page.cy'
import testData from '../fixtures/testdata'

describe("Add Employee Suite", () => {

    beforeEach("Login Page", () => {
        cy.loginPage()
    })

    it("Add Employee", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.correct.username, testData.login.correct.password)
        dashboard.clickPIM()
        dashboard.linkClass.should("have.class", "active")

        addEmployee.assertpimUrl()
        addEmployee.assertpimTitle()

        addEmployee.clickAddEmployeeMenu()
        addEmployee.assertpimAddEmployeeUrl()
        addEmployee.assertaddemployeeTxt()

        addEmployee.saveEmployee(testData.employee.fileName, testData.employee.firstName, testData.employee.middleName, testData.employee.lastName)
        addEmployee.assertSuccessMessage()
        addEmployee.assertPersonalDetailsUrl()
    })
})