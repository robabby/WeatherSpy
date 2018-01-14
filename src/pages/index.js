import React from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'

import api from '../utils/api'
import { rhythm, scale } from '../utils/typography'
import * as actions from '../state/actions'

import Header from '../components/Header'
import SelectTempUnit from '../components/SelectTempUnit'
import CurrentConditions from '../components/CurrentConditions'
import Forecast from '../components/Forecast'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  getData = async () => {
    await this.props.getCurrentWeather(this.props.settings.unit)
    await this.props.getForecast(this.props.settings.unit)
    await this.props.getAirQuality(this.props.weather.coord)
    await this.props.getWeatherMap(this.props.weather.coord)
  }
  componentDidMount() {
    this.getData()
  }
  renderMap = () => {
    let { city } = this.props.forecast

    if (city) {
      return (
        <img
          className="ws-precipitation-layer"
          src={this.props.weatherMap.image}
          alt={`Precipitation Map`}
        />
      )
    } else {
      return (
        <div>Loading map...</div>
      )
    }
  }
  render() {
    return (
      <div className="ws-page">
        <SelectTempUnit />
        <CurrentConditions />
        <Forecast />
        {/* {this.renderMap()} */}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast, airQuality, weatherMap }) => {
  return { settings, weather, forecast, airQuality, weatherMap }
}

export default connect(mapStateToProps, actions)(IndexPage);
