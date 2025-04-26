
class Helper {


    get userDropDownIcon() {
        return cy.get(".oxd-userdropdown-icon")
    }


    get getMenuItems(){
        return cy.get("ul[role='menu'] a[role='menuitem']")
    }

    clickMenuItem(item) {
        /* this.getMenuItems.each(($ele, index) => {
            cy.log(`Menu item ${index}:`, $ele.text())

            if($ele.text().includes(item)){
                cy.wrap($ele).click()
            }
        }) */

        this.userDropDownIcon.click()
        this.getMenuItems.contains(item).click()
    }

} export default new Helper();