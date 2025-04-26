class AddEmployee {


    get addEmployeeMenu(){
        return cy.get("nav[role='navigation'] li a").contains(/Add Employee/i)
    }

    get imageUpload(){
        return cy.get("input[type=file]")
    }

    get fName(){
        return cy.get("input[name=firstName]")
    }

    get mName(){
        return cy.get("input[name=middleName]")
    }

    get lName(){
        return cy.get("input[name=lastName]")
    }

    get loginDetailsToggle(){
        return cy.get("span.oxd-switch-input")
    }

    get cancelBtn(){
        return cy.contains(/cancel/i)
    }

    get saveBtn(){
        return cy.contains(/save/i)
    }

   assertpimUrl(){
    cy.url().should("include", "pim")
   }

   assertpimAddEmployeeUrl(){
    cy.url().should("include", "addEmployee")
   }

   assertpimTitle(){
    cy.get("H6").contains(/pim/i).should("be.visible")
   }

   assertaddemployeeTxt(){
    cy.get("H6").contains(/add employee/i).should("be.visible")
   }

   assertSuccessMessage(){
    cy.get("div#oxd-toaster_1").should("be.visible").and("contain", "Successfully Saved")
   }

   assertPersonalDetailsUrl() {
    cy.url().should("include", "viewPersonalDetails")
   }

   clickAddEmployeeMenu(){
    this.addEmployeeMenu.click()
   }

// Method to add employee

saveEmployee(fileName, firstName, middleName, lastName){
    cy.get('button.employee-image-action').click()
    this.imageUpload.selectFile(fileName, { force: true})

    this.fName.type(firstName)
    this.mName.type(middleName)
    this.lName.type(lastName)

    this.saveBtn.click()
}

} export default new AddEmployee()