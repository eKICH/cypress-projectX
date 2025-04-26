import loginPage from '../pages/login.page.cy'
import dashboard from '../pages/dashboard.page.cy'
import data from '../fixtures/testdata'

describe("Logout Test Suite", () => {

    beforeEach("Logi Page", () => {
        cy.loginPage()
    })

    it("Logout Logged In User", () => {
        // Assert user is on the login screen
        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        
        // Enter Creds and click log in
        loginPage.loginToApp(data.login.correct.username, data.login.correct.password)
        

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