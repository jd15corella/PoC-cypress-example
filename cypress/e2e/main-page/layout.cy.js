/// <reference types="cypress" />
import mp from "../../pages/mainPage.js"
const mainPage = new mp();

describe('Review Layout Main Page', () => {
  beforeEach(() => {
    
    mainPage.visitHomePage()

  })

  it('Should load the LatLong.net page', () => {
    mainPage.getTitle().should('include', 'Latitude and Longitude Finder on Map Get Coordinates')
  })

  it('Place Name input and find button present', () => {
    mainPage.placeNameInput().should('exist')
    mainPage.findBtn().should('exist')
  })
  it('Lat and Long inputs present', () => {
    mainPage.getLatitude().should('exist')
    mainPage.getLongitude().should('exist')
  })
  it('Maps are present', () => {
    mainPage.getMap().should('exist')
    mainPage.getLongMap().should('exist')
  })
  it('Social media buttons present', () => {
    mainPage.twitterBtn().should('exist')
    mainPage.fbBtn().should('exist')
  })
  it('Should navigate to Geo Tool page', () => {
    mainPage.navigateToGeoToolsPage()
    cy.url().should('include', '/geo-tools')
  })

//More test about the display layout of the page can be added
//included amount of tabs, user login and texts  
})
describe('Responsive Design', () => {
  it('Should display correctly on mobile view', () => {
    cy.viewport('iphone-6')
    mainPage.visitHomePage()
    cy.AllFieldsPresent()
  })

  it('Should display correctly on tablet view', () => {
    cy.viewport('ipad-2')
    mainPage.visitHomePage()
    cy.AllFieldsPresent()
  })
})
