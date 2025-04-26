import loginPage from '../pages/login.page.cy'
import dashboard from '../pages/dashboard.page.cy'
import testData from '../fixtures/testdata'

beforeEach("Logi Page", () => {
    cy.loginPage()
})

describe("Login Test Suite", () => {

    it("Using Correct Username and Password", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.correct.username, testData.login.correct.password)
        dashboard.dashboardText()
    });

    it("Using Correct Username and wrong Password", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.wrongpass.username, testData.login.wrongpass.password)
        loginPage.assertInvalidCredsText()
    });

    it("Using Wrong Username and correct Password", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.wrongusername.username, testData.login.wrongusername.password)
        loginPage.assertInvalidCredsText()
    });

    it("Using Wrong Username and Wrong Password", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.wrongusernamepassword.username, testData.login.wrongusernamepassword.password)
        loginPage.assertInvalidCredsText()
    });

    it("Using Email and Password", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.usingEmail.username, testData.login.usingEmail.password)
        loginPage.assertInvalidCredsText()
    });

    it("Using number and Password", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.usingPhoneNo.username, testData.login.usingPhoneNo.password)
        loginPage.assertInvalidCredsText()
    });


    it("Using text&number and Password", () => {

        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.loginToApp(testData.login.usingTextNo.username, testData.login.usingTextNo.password)
        loginPage.assertInvalidCredsText()
    });

    it("Using blank username and filled password", () => {
        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.username.type(testData.login.blankUsername.username).clear()
        loginPage.password.type(testData.login.blankUsername.password)
        loginPage.loginBtn.click()

        loginPage.requiredText.should('be.visible')
    });

    
    it("Using filled username and blank password", () => {
        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.username.type(testData.login.blankUsername.username)
        loginPage.password.type(testData.login.blankUsername.password).clear()
        loginPage.loginBtn.click()

        loginPage.requiredText.should('be.visible')
    });


    it("Using blank username and blank password", () => {
        loginPage.assertLoginUrl()
        loginPage.assertLoginText()

        loginPage.username.type(testData.login.blankUsername.username).clear()
        loginPage.password.type(testData.login.blankUsername.password).clear()
        loginPage.loginBtn.click()

        loginPage.requiredText.should('be.visible')
    });
})