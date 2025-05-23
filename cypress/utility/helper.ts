
class Helper {


    get userDropDownIcon() {
        return cy.get(".oxd-userdropdown-icon")
    }


    get getMenuItems(){
        return cy.get("ul[role='menu'] a[role='menuitem']")
    }

    clickMenuItem(item: any) {
        /* this.getMenuItems.each(($ele, index) => {
            cy.log(`Menu item ${index}:`, $ele.text())

            if($ele.text().includes(item)){
                cy.wrap($ele).click()
            }
        }) */

        this.userDropDownIcon.click()
        this.getMenuItems.contains(item).click()
    }

    randomEmpID(): number {
        return Math.floor(10000 + Math.random() * 90000);
    }

} export default new Helper();