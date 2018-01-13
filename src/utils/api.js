module.exports = {
  apiKey: 'd286a12239b52b89359c9baf67186f60',
  apiUrl: 'https://api.openweathermap.org/data/2.5/',
  cityId: '3169070',
  getWeatherUrl(unit) {
    return `${this.apiUrl}weather?id=${this.cityId}&units=${unit}&APPID=${this.apiKey}`
  },
  getForecastUrl(unit) {
    return `${this.apiUrl}forecast?id=${this.cityId}&units=${unit}&APPID=${this.apiKey}`
  },
}
