describe('Operation Portal Orders Page Functioanality', function() {
	it('Visits the Orders Page', function() {		
		
		cy.fixture('default-user').then((user) => {
        	this.user = user
		cy.Login(this.user.username, this.user.password)    
         })

         
cy.visit('https://hs-staging.com/operation/en/orders');
cy.url().should('include','/orders'); 

//Filter the page by 'Successful Orders'
cy.get('#by_state').select('Successful');
  cy.get('.col-sm-6 > .btn').click();
     cy.url().should('include','state=2'); 

//Filter the page by 'Failed Orders'
cy.get('#by_state').select('Failed');
  cy.get('.col-sm-6 > .btn').click();
     cy.url().should('include','state=3'); 


//Filter the page by 'Cash Orders'
cy.get('#by_order_payment_method').select('Cash')
  cy.get('.col-sm-6 > .btn').click();
     cy.url().should('include','by_order_payment_method=0'); 

//Filter the page by 'Credit Card Orders'
cy.get('#by_order_payment_method').select('Credit Card')
  cy.get('.col-sm-6 > .btn').click();
     cy.url().should('include','by_order_payment_method=1');


//Filter the page by 'Wallet Orders'
cy.get('#by_order_payment_method').select('Wallet')
  cy.get('.col-sm-6 > .btn').click();
     cy.url().should('include','by_order_payment_method=3');

//Filter the page by 'Hungerstation Delivery Orders'
cy.get('#by_delivery_provider').select('Hungerstation Delivery')
  cy.get('.col-sm-6 > .btn').click();
     cy.url().should('include','by_delivery_provider=2');

//Filter the page by 'Hungerstation Delivery Orders'
cy.get('#by_delivery_provider').select('Restaurant Delivery')
  cy.get('.col-sm-6 > .btn').click();
     cy.url().should('include','by_delivery_provider=3');

//Filter the page by 'Country'
cy.get('#select2-by_country-container').type('Saudi Arabia')
  cy.get('.select2-item > :nth-child(2)').click();
      cy.get('.col-sm-6 > .btn').click();
         cy.url().should('include','by_country=1');

//filter the page by a single order  
cy.fixture('order-ids.json').then((id) => {
     this.id = id 
        cy.get('#by_id').type(this.id.OrderID1)
             cy.get('.col-sm-6 > .btn').click();
                cy.url().should('include',this.id.OrderID2)
})
	
})	
	
	
})


