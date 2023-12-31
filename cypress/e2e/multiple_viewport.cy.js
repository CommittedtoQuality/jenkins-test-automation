describe('Responsive Testing', () => {

    const viewports = [
        { width: 1280, height: 720 }, //Desktop
        { width: 320, height: 480}, //Mobile Portrait
        { width: 768, height:1024 } // Table
    ]

    it.only("Test 1", ()=>{
        // it will iterate this array and before visiting 
        // it will change the viewport
        viewports.forEach((view) => {
            cy.viewport(view.width, view.height)
            cy.visit('https://www.jenkins.io/')

        })
    })
    
});