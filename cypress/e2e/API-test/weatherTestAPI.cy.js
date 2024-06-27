import weatherAPI from "../../pages/weatherAPI.js"

describe('Open Meteo API Tests', () => {
  let testdata
  beforeEach(() => {
    cy.fixture('testdata.json').then(data => {
      testdata = data
    })   
  })
  it('Should retrieve weather by coordinates', () => {

    weatherAPI.getWeatherByCoordinates(testdata.latitude, testdata.longitude).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('timezone')
      expect(response.body).to.have.property('elevation')
    })
  })

  it('Should fail retrieve weather by invalid coordinates', () => {

    weatherAPI.getWeatherByCoordinates(testdata.invalidlatitude, testdata.invalidlongitude).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('reason')
      expect(response.body.reason).to.not.be.empty
      
    })
  })
})