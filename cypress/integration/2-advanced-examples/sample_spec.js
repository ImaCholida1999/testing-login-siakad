/// <reference types="cypress" />

describe("User Melakukan Login pada Website Siakad Polinema", () => {

    // 1. Login menggunakan password dan username yang salah
    it("Login menggunakan password dan username yang salah", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1831711111');
        cy.get('#password').type('1831711111');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    // 2. User memasukkan password salah username benar
    it("User memasukkan password salah username benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1831710159');
        cy.get('#password').type('1831711111');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    // 3. User memasukkan username salah dan password benar
    it("User memasukkan username salah dan password benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1222222222');
        cy.get('#password').type('1111111159');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    // 4. User tidak memasukkan username dan password 
    it("User tidak memasukkan username dan password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });

    // 5. User memasukkan username dan password benar
    it("User memasukkan username dan password benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1831710159');
        cy.get('#password').type('1831710000'); // mohon maaf sebelumnya, password sengaja disalahkan untuk menghindari hal-hal yang tidak diinginkan
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah ');
    });

    // 6. User memasukkan username dan mengosongi password
    it("User memasukkan username dan mengosongi password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1831710159');
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Password harus diisi');
    });

    // 7. User memasukkan password dan mengosongi username
    it("User memasukkan password dan mengosongi username", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').type('1831711111');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });
});