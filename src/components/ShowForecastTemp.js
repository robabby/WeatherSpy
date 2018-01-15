import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'
import helpers from '../utils/helpers'

class ShowTemp extends React.Component {
  constructor(props) {
    super(props)
  }
  renderTemp = () => {
    let { settings, weather, temp } = this.props
    let isBoth = settings.unit === "both"
    let isImperial = settings.unit === "imperial"
    let isMetric = settings.unit === "metric"
    let imperialCurrent = helpers.cleanDecimals(temp)
    let metricCurrent = helpers.convertToMetric(imperialCurrent)

    if (isBoth) {
      return `${imperialCurrent}F - ${metricCurrent}C`
    } else if (isMetric) {
      return `${metricCurrent}C`
    } else if (isImperial) {
      return `${imperialCurrent}F`
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
