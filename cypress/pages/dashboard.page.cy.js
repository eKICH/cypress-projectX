
import helper  from '../utility/helper'
import loginPage from '../pages/login.page.cy'


class Dashboard {

    // Get Dashboard Text on the top nav
    get dashboardTxt() {
        return cy.get("H6").contains(/dashboard/i)
    }

    get pim(){
        return cy.get("ul.oxd-main-menu li a span").contains(/pim/i)
    }

    get linkClass(){
        return cy.get("ul.oxd-main-menu li a")
    }

    dashboardText() {
        this.dashboardTxt.should("be.visible")
    }

    assertDashboardUrl() {
        cy.url().should("contain", /dashboard/i)
    }
    
    clickPIM(){
        this.pim.click()
    }

    logoutUser(){
        helper.clickMenuItem(/logout/i)
        return loginPage
    }

} export default new Dashboard()