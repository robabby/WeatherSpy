import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import * as actions from '../state/actions'

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
      description
    } = this.props
    let iconClassName = 'wi wi-owm-' + id

    return (
      <div className="ws-forecast-content">
        <i className={iconClassName}></i>
        <h2>{main}</h2>
        <p>{tempMin} - {tempMax}</p>
      </div>
    )
    // return forecast.list.map((data, i) => {
    //   if (data.dt_txt.includes(day)) {
    //   }
    // })

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
