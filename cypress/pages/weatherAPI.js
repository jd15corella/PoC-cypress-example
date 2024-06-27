class weatherAPI {
    getWeatherByCoordinates(latitude, longitude) {
      return cy.request({
        method: 'GET',
        url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`,
        failOnStatusCode: false
    })
    }
  }
  
  export default new weatherAPI()