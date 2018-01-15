import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'

import '../assets/scss/components/SelectTempUnit.scss'

class SelectTempUnit extends Component {
  constructor(props) {
    super(props)
  }
  onChangeTempUnit = (event) => {
    this.props.changeTempUnit(this.props.settings.unit, event.target.value)
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
