import helper from '../utility/helper'

export const testData = {
    login: {
        correct: {
            username: "admin",
            password: "admin123"
        },

        wrongpass: {
            username: "admin",
            password: "admin1234"
        },

        wrongusername: {
            username: "admins",
            password: "admin123"
        },

        wrongusernamepassword: {
            username: "admins",
            password: "admins123"
        },

        usingEmail: {
            username: "admin@gmail.com",
            password: "admins123"
        },

        usingPhoneNo: {
            username: "+156723723823",
            password: "admins123"
        },

        usingTextNo: {
            username: "admin156723723823",
            password: "admins123"
        },

        blankUsername: {
            username: "admin",
            password: "admins123"
        },

    },

    employee: {
        fileName: "cypress/fixtures/files/profile.png",
        firstName: "Employee",
        middleName: "Best",
        lastName: "Performer",
        empId: helper.randomEmpID(),
    }
}; 