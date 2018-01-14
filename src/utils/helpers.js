import convert from 'convert-units'

module.exports = {
  convertFromKelvinToUnit(temp, unit) {
    let type;

    if (unit !== 'both') {
      type = unit === 'imperial' ? 'F' : 'C'
    } else {
      type = 'F'
    }

    let newTemp = convert(temp).from('K').to(type)
    return this.cleanDecimals(newTemp)
  },
  convertToMetric(temp) {
    let metricTemp = convert(temp).from('F').to('C')
    return this.cleanDecimals(metricTemp)
  },
  convertToKelvin(temp, type) {
    let unit = type === 'imperial' ? 'F' : 'C'
    let metricTemp = convert(temp).from(unit).to('K')
    return this.cleanDecimals(metricTemp)
  },
  cleanDecimals(val) {
    return val.toFixed()
  }
}
