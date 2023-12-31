describe('Responsive Testing', () => {

    it("Test 1", ()=>{
        cy.viewport(640, 480)
        cy.visit('https://www.jenkins.io/')
        cy.viewport('iphone-6', 'landscape')
        
    })
    
});