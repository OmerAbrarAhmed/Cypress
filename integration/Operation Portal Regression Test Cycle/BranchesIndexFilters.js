describe('Operation Portal Branches Page Functioanality', function() {
	it('Visits the Branches Page', function() {		
		
		cy.fixture('default-user').then((user) => {
        	this.user = user
		cy.Login(this.user.username, this.user.password)    
         })

         
cy.visit('https://hs-staging.com/operation/en/branches');
cy.url().should('include','/orders'); 
        })
    })
