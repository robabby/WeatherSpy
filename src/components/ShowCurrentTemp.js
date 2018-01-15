import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'
import helpers from '../utils/helpers'

class ShowTemp extends React.Component {
  constructor(props) {
    super(props)
  }
  renderTemp = () => {
    let { settings, weather } = this.props
    let { temps } = weather
    let { imperial, metric } = temps

    let isBoth = settings.unit === "both"
    let isImperial = settings.unit === "imperial"
    let isMetric = settings.unit === "metric"
    let imperialTemp = helpers.cleanDecimals(imperial.temp)
    let metricTemp = helpers.cleanDecimals(metric.temp)

    if (isBoth) {
      return `${imperialTemp}F - ${metricTemp}C`
    } else if (isMetric) {
      return `${metricTemp}C`
    } else if (isImperial) {
      return `${imperialTemp}F`
    } else {
      return `Loading...`
    }
  }
  render() {
    return (
      <span>
        {this.renderTemp()}
      </span>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast }) => {
  return { settings, weather, forecast }
}

export default connect(mapStateToProps, actions)(ShowTemp);
