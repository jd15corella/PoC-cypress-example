class mainPage {

    placeNameInput() {
        return cy.get('#place')
    }

    visitHomePage() {
        cy.visit('https://www.latlong.net/')
    }

    visitHomePageSkipGeoLoc() {
        cy.visit('https://www.latlong.net/', {
            onBeforeLoad ({ navigator }) {
              // NY city
              const latitude = 40.7128
              const longitude = -74.006
             cy.stub(navigator.geolocation, 'getCurrentPosition')
               .callsArgWith(0, { coords: { latitude, longitude } })
            }
          })
    }//Attent to bypass the geolocation for the page. 

    getTitle() {
        return cy.title()
    }

    searchLocation(location) {
        cy.get('#place').type(location,{delay:100})
        cy.get('#btnfind').click()
    }

    clearSearch() {
        cy.get('#clear').click()
    }

    getLatitude() {
        return cy.get('#lat')
    }

    getLongitude() {
        return cy.get('#lng')
    }

    getErrorMessage() {
        return cy.get('p[style="color:red"]')
    }

    navigateToGeoToolsPage() {
        cy.get('a[title="Geographic Tools"]').click()
    }

    findBtn() {
        return cy.get('#btnfind')
    }

    getMap() {
        return cy.get('#latlongmap')
    }

    getLongMap() {
        return cy.get('#latlongmape')
    }

    fbBtn() {
        return cy.get('a[class="button share-on-facebook"]')
    }

    twitterBtn() {
        return cy.get('a[class="button share-on-twitter"]')
    }
}
export default mainPage