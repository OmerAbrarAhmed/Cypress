describe('Operation Portal Branches Page Functioanality', function() {
	it('Visits the Branches Page', function() {		
		
		cy.fixture('default-user').then((user) => {
        	this.user = user
		cy.Login(this.user.username, this.user.password)    
         })

         
cy.visit('https://hs-staging.com/operation/en/branches');
cy.url().should('include','/branches'); 
       
//test to filter by a single branch id 
cy.fixture('branch-ids.json').then((id) => {
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

//filter by restaurant name 
cy.fixture('restaurant-ids.json').then((restaurant) => {
    this.restaurant = restaurant 
cy.get('#select2-by_restaurant-container').type(this.restaurant.restaurantname)
cy.get('.select2-results__option--highlighted > .select2-item > .identifier').click({force: true})
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include',this.restaurant.restaurantid1)              
})
//filter by city 
cy.fixture('city-ids.json').then((city) => {
    this.city = city 
cy.get('#select2-by_city-container').type(this.city.cityname)
cy.get('.select2-results__option--highlighted > .select2-item > .identifier').click({force: true})
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include',this.city.cityid1)              
})
//filter by country 
cy.fixture('country-ids.json').then((country) => {
    this.country = country 
cy.get('#select2-by_country-container').type(this.country.countryname)
cy.get('.select2-results__option--highlighted > .select2-item > .identifier').click({force: true})
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include',this.country.countryid1)              
})
//filter by enabled(true/false)
cy.get('#by_enabled').select('enabled')
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_enabled=true')              
cy.get('#by_enabled').select('disabled')
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_enabled=false')  

//filter by delivery provider (OD and RD)
cy.get('#by_delivery_provider').select('Hungerstation Delivery')
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_delivery_provider=2')              
cy.get('#by_delivery_provider').select('Restaurant Delivery')
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_delivery_provider=3')     

//flter by branch_type branch device
cy.get('#by_branch_type').select('branch_device')
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_branch_type=9')              

//flter by branch_type  darkstore
cy.get('#by_branch_type').select('darkstore')
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_branch_type=12')              

//flter by branch_type  RPS
cy.get('#by_branch_type').select('rps_food')
cy.get('.col-sm-6 > .btn').click();
cy.url().should('include','by_branch_type=14')  
})

})
