import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../state/actions'
import helpers from '../utils/helpers'

import '../assets/scss/components/CurrentConditions.scss'

class ForecastItem extends React.Component {
  constructor(props) {
    super(props)
  }

  renderForecast = () => {
    let {
      forecast,
      id,
      day,
      tempMin,
      tempMax,
      main,
      description,
      hours
    } = this.props
    let iconClassName = 'wi wi-owm-' + id
    let dayName = moment(day).format("dddd")

    return (
      <div className="ws-forecast-content">
        <h2>{dayName}</h2>
        <div>
          <i className={iconClassName}></i>
          <h3>{main}</h3>
        </div>
        <p>{helpers.cleanDecimals(tempMin)} - {helpers.cleanDecimals(tempMax)}</p>
        {this.renderHours(hours)}
      </div>
    )
  }
  renderHours = (hours) => {

    return hours.map((data, i) => {
      // return (
      //   <div key={i}>
      //     hours
      //   </div>
      // )
    })
  }
  render() {
    return (
      <div className="ws-forecast-item">
        {this.renderForecast()}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast }) => {
  return { settings, weather, forecast }
}

export default connect(mapStateToProps, actions)(ForecastItem);
