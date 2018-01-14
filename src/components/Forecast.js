import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'

import ForecastItem from '../components/ForecastItem'
import '../assets/scss/components/Forecast.scss'

class Forecast extends React.Component {
  constructor(props) {
    super(props)
  }
  renderForecastItems() {
    let { forecast } = this.props
    let date = new Date()
    let today = date.toISOString().substring(0, 10)

    if(!forecast.list) {
      return (
        <div>
          loading...
        </div>
      )
    } else {
      return forecast.list.map((data, i) => {
        let weather = data.weather[0]
        let dt_sub = data.dt_txt.substring(0, 10)

        if (today === dt_sub) {
          return
        }

        if (date !== dt_sub) {
          date = dt_sub
          return (
            <ForecastItem
              key={i}
              id={weather.id}
              day={dt_sub}
              tempMin={data.main.temp_min}
              tempMax={data.main.temp_max}
              main={weather.main}
              description={weather.description}
            />
          )
        }
      })
    }
  }
  render() {
    return (
      <div className="ws-forecast">
        {this.renderForecastItems()}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast }) => {
  return { settings, weather, forecast }
}

export default connect(mapStateToProps, actions)(Forecast);
