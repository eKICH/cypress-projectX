import loginPage from '../pages/login.page.cy'
import dashboard from '../pages/dashboard.page.cy'
import { testData }  from '../fixtures/testdata'

describe("Logout Test Suite", () => {

    beforeEach("Logi Page", () => {
        cy.loginPage()

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        cy.login(testData.login.correct.username, testData.login.correct.password)
    })

    it("Logout Logged In User", () => {
        // Assert daashboard URL and Dashboard Text 
        dashboard.assertDashboardUrl()
        dashboard.dashboardText()

        // User logs out
        dashboard.logoutUser()

        // Assert user is taken baack to the login screen and the correct URL
        loginPage.assertLoginUrl()
        loginPage.assertLoginText()
    })
})