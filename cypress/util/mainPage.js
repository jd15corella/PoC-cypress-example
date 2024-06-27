import mp from "../pages/mainPage.js"
const mainPage = new mp();

Cypress.Commands.add('SearchGeoLocation', (data)=>{
    mainPage.searchLocation(data.city)
    mainPage.getLatitude().should('have.value', data.latitude)
    mainPage.getLongitude().should('have.value', data.longitude)
})

Cypress.Commands.add('AllFieldsPresent', ()=>{
    mainPage.getTitle().should('include', 'Latitude and Longitude Finder on Map Get Coordinates')
    mainPage.placeNameInput().should('exist')
    mainPage.findBtn().should('exist')
    mainPage.getLatitude().should('exist')
    mainPage.getLongitude().should('exist')
    mainPage.getMap().should('exist')
    mainPage.getLongMap().should('exist')
    mainPage.twitterBtn().should('exist')
    mainPage.fbBtn().should('exist')
})

