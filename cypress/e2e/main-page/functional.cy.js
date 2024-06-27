/// <reference types="cypress" />
import mp from "../../pages/mainPage.js"
const mainPage = new mp();


describe('Simple Review Functionality Main Page', () => {
  beforeEach(() => {
    
    mainPage.visitHomePage()

  })

  it('Should search for coordinates of a location', () => {
    mainPage.searchLocation('New York')
    mainPage.getLatitude().should('have.value', '40.712776')
    mainPage.getLongitude().should('have.value', '-74.005974')
  })

  it('Should show error for invalid location', () => {
    mainPage.searchLocation('asfaxzc')
    mainPage.getErrorMessage().should('have.text', 'No place found.')
  })


})


describe('TestData Review Functionality Main Page', () => {
  let testdata
  beforeEach(() => {
    cy.fixture('testdata.json').then(data => {
      testdata = data
    })   
    mainPage.visitHomePage()

  })

  it('Should search for coordinates of a location', () => {
      cy.SearchGeoLocation(testdata)
  })

  it('Should show error for invalid location', () => {
    mainPage.searchLocation(testdata.invalidCity)
    mainPage.getErrorMessage().should('have.text', 'No place found.')
  })


})
