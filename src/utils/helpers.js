import convert from 'convert-units'

module.exports = {
  convertToMetric(temp) {
    let metricTemp = convert(temp).from('F').to('C')
    return this.cleanDecimals(metricTemp)
  },
  cleanDecimals(val) {
    return val.toFixed()
  }
}
