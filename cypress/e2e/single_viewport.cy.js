describe('Responsive Testing', () => {

    beforeEach(() => {
        cy.viewport(640, 480)
        cy.visit('/')
        cy.viewport('iphone-6', 'landscape')
        const title = "Jenkins"
        cy.get('h1.page-title').contains(title)
        
    });

    it("Test 1", ()=>{
        cy.get('[style="opacity: 1;"]').children().should('have.length', 10)
       
    
    })
    
});