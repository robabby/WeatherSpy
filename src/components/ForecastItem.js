import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../state/actions'
import helpers from '../utils/helpers'

import ShowForecastTemp from '../components/ShowForecastTemp'

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
    let dayName = moment(day).format("dddd")

    return (
      <div className="ws-forecast-content">
        <h2>{dayName}</h2>
        {this.renderHours(hours)}
      </div>
    )
  }
  renderHours = (hours) => {
    return hours.map((data, i) => {
      let { dt_txt, main, weather } = data
      let iconClassName = 'wi wi-owm-' + weather[0].id
      let time = moment(dt_txt).format("h:mm:ss a")
      let temp = helpers.cleanDecimals(main.temp)
      let status = weather[0].main

      return (
        <div key={i} className="ws-forecastItem__hours">
          <div>
            <ShowForecastTemp temp={temp} />
            <i className={iconClassName}></i>
            {status}
            {time}
          </div>
        </div>
      )
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
