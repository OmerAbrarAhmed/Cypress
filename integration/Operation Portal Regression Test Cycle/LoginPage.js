describe('Operation Portal Login Functioanality', function() {
it('Visits the Operation Portal Login Page', function() {
cy.visit('https://hs-staging.com/operation/')

cy.contains('sign in')

//Should be on a URL which contains /agents/user/login

cy.url().should('include', 'agents/user/login')

//Send input to the field and verify it has been added

 cy.fixture('default-user').then((user)  => {
    var username = user.username
    var password = user.password
cy.get('#agent_username').type(username).should('have.value',username);
cy.get('#agent_password').type(password).should('have.value',password);
cy.get('.btn').click() ;
cy.url().should('include','/operation'); 
    });

})
})
