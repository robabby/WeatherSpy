import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'

import '../assets/scss/components/SelectTempUnit.scss'

class SelectTempUnit extends Component {
  constructor(props) {
    super(props)
  }
  onChangeTempUnit = (event) => {
    let { temp } = this.props.weather
    let isBoth = event.target.value === "both"
    let isImperial = event.target.value === "imperial"
    let isMetric = event.target.value === "metric"
    let haveImperial = temp.imperial.current
    let haveMetric = temp.metric.current
    let haveBoth = haveImperial && haveMetric

    this.props.changeTempUnit(event.target.value)

    if (isMetric && !haveMetric) {
      this.props.getCurrentWeather(event.target.value)
    } else if (isBoth && !haveMetric) {
      this.props.getCurrentWeather("metric")
    }
  }
  render() {
    return (
      <div className="ws-selectTempUnit">
        <h3 className="ws-selectTempUnit__title">Units</h3>
        <span>Select temperature unit:</span>
        <br />
        <select onChange={this.onChangeTempUnit} value={this.props.unit}>
          <option value="imperial">Imperial</option>
          <option value="metric">Metric</option>
          <option value="both">Both</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather }) => {
  return { settings, weather }
}

export default connect(mapStateToProps, actions)(SelectTempUnit);
