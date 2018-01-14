import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'
import helpers from '../utils/helpers'

import '../assets/scss/components/CurrentConditions.scss'

class CurrentConditions extends React.Component {
  constructor(props) {
    super(props)
  }

  showTemp = () => {
    let { settings, weather } = this.props
    let isBoth = settings.unit === "both"
    let isImperial = settings.unit === "imperial"
    let isMetric = settings.unit === "metric"
    let imperialCurrent = weather.temp.imperial.current
    let metricCurrent = weather.temp.metric.current
    let haveBoth = imperialCurrent && metricCurrent !== 0

    if (isBoth && haveBoth) {
      return `${imperialCurrent}F - ${helpers.convertToMetric(imperialCurrent)}C`
    } else if (isMetric) {
      return `${helpers.convertToMetric(imperialCurrent)}C`
    } else if (isImperial) {
      return `${imperialCurrent}F`
    } else {
      return `Loading...`
    }
  }

  renderCurrentConditions = () => {
    let { forecast, weather } = this.props
    let { temp, humidity } = weather
    let { city } = forecast

    if (weather && city) {
      return (
        <div className="ws-current__meta">
          <h3 className="meta__location">{city.name}, {city.country}</h3>
          <h1 className="meta__temp">
            <i className={weather.iconClassName}></i>
            {this.showTemp()}
          </h1>
        </div>
      )
    } else {
      return (
        <div>
          loading...
        </div>
      )
    }
  }
  render() {
    return (
      <div className="ws-current">
        {this.renderCurrentConditions()}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast }) => {
  return { settings, weather, forecast }
}

export default connect(mapStateToProps, actions)(CurrentConditions);
