
Cypress.Commands.add('Login', (username, password) => {
cy.visit('https://hs-staging.com/operation/en/');
cy.get('#agent_username').type(username)
cy.get('#agent_password').type(password)
cy.get('.btn').click() ;

})

