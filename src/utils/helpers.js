import convert from 'convert-units'

module.exports = {
  convertToMetric(temp) {
    let metricTemp = convert(temp).from('F').to('C')
    return this.cleanDecimals(metricTemp)
  },
  convertToImperial(temp) {
    let imperialTemp = convert(temp).from('C').to('F')
    return this.cleanDecimals(imperialTemp)
  },
  convertToKelvin(temp, type) {
    let unit = type === 'imperial' ? 'F' : 'C'
    let kelvinTemp = convert(temp).from(unit).to('K')
    return this.cleanDecimals(kelvinTemp)
  },
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
  cleanDecimals(val) {
    if (!val) {
      return
    } else if (val % 1 !== 0) {
      return val.toFixed()
    } else {
      return val
    }
  }
}
