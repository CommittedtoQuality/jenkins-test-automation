describe('Responsive Testing', () => {

    const presets = [ 'macbook-15', 'samsung-note9', 'ipad-mini', 'iphone-xr']

    it.only("Test 1", ()=>{
        // it will iterate this array and before visiting 
        // it will change the viewport
        presets.forEach((device) => {
            cy.viewport(device)
            cy.visit('/')
        })
    })
    
});