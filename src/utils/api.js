module.exports = {
  apiKey: 'd286a12239b52b89359c9baf67186f60',
  apiUrl: 'https://api.openweathermap.org/',
  cityId: '3169070',
  getWeatherUrl(unit) {
    return `${this.apiUrl}data/2.5/weather?id=${this.cityId}&units=${unit}&APPID=${this.apiKey}`
  },
  getForecastUrl(unit) {
    return `${this.apiUrl}data/2.5/forecast?id=${this.cityId}&units=${unit}&APPID=${this.apiKey}`
  },
  getAirQualityUrl(coords) {
    let lat = coords.lat.toFixed()
    let lon = coords.lon.toFixed()
    return `${this.apiUrl}pollution/v1/co/${lat},${lon}/current.json?appid=${this.apiKey}`
  },
  getWeatherMap(coords) {
    let owmLayerName = 'precipitation'
    let zoom = '10'
    let lat = coords.lat.toFixed()
    let lon = coords.lon.toFixed()
    return `https://tile.openweathermap.org/map/${owmLayerName}/${zoom}/${lat}/${lon}.png?appid=${this.apiKey}`
  },
  getNewTriggerUrl() {
    return `https://api.openweathermap.org/data/3.0/triggers?appid=d286a12239b52b89359c9baf67186f60`
  },
  getTriggersUrl() {
    return `${this.apiUrl}data/3.0/triggers/?appid=${this.apiKey}`
  }
}
