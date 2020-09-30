describe('Operation Portal Branches Page Functioanality', function() {
	it('Visits the Branches Page', function() {		
		
		cy.fixture('default-user').then((user) => {
        	this.user = user
		cy.Login(this.user.username, this.user.password)    
         })

         
cy.visit('https://hs-staging.com/operation/en/branches');
cy.url().should('include','/branches'); 
       
//test to filter by a single branch id 
cy.fixture('branch-ids.json').then((id,id1) => {
    this.id = id 
       cy.get('#by_id').type(this.id.branchid1)
            cy.get('.col-sm-6 > .btn').click();
               cy.url().should('include',this.id.branchid1)
//test for filter by multiple branch ids 
    cy.get('#by_id').clear()
    cy.get('#by_branch_ids').type(this.id.branchid1)
    cy.get('#by_branch_ids').type(",")
    cy.get('#by_branch_ids').type(this.id.branchid2)
    cy.get('.col-sm-6 > .btn').click();
    cy.url().should('include',this.id.branchid2)              
})
//filter by restaurant status (active/inactive)
cy.get('#by_branch_ids').clear()
cy.get('#by_restaurant_status').select('Active').click
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_restaurant_status=true')              
cy.get('#by_restaurant_status').select('Inactive').click
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_restaurant_status=false')              

})
    })
