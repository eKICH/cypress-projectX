
class LoginPage {

    // Get Element username
    get username() {
        return cy.get("input[name='username']")
    }


    // Get Element password
    get password() {
        return cy.get("input[name='password']")
    }

    // Get Element login button
    get loginBtn() {
        return cy.get("button[type='submit']")
    }

    // Get Elemement login text for assertion
    get loginTxt() {
        return cy.get("H5", {timeout: 10000}).contains(/login/i)
    }

    // Get invalid credentials text for assertion
    get invalidCredentials(){
        return cy.get("p").contains(/Invalid credentials/i)
    }

    // Get Required text
    get requiredText() {
        return cy.get("div>span").contains(/Required/i)
    }

    assertLoginUrl() {
        cy.url().should('contain', "/login")
    }

    assertLoginText() {
        this.loginTxt.should('be.visible')
    }

    assertInvalidCredsText(){
        this.invalidCredentials.should("be.visible");
    }

} export default new LoginPage()