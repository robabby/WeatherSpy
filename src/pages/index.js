import React from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Moment from 'react-moment'

import api from '../utils/api'
import { rhythm, scale } from '../utils/typography'
import * as actions from '../state/actions'

import Header from '../components/Header'
import SelectTempUnit from '../components/SelectTempUnit'

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
    console.log('IndexPage | componentDidMount:this.props', this.props);
    this.getData()
  }
  componentWillReceiveProps() {
    console.log('IndexPage | componentWillReceiveProps:this.props', this.props);
  }
  renderForecast = () => {
    let { forecast } = this.props
    let i = 1;

    if(!forecast.list) {
      return (
        <div>
          loading...
        </div>
      )
    } else {
      return forecast.list.map(data => {
        i++
        return (
          <div key={i}>
            <Moment unix>{data.dt}</Moment>
          </div>
        )
      })
    }
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
      <div>
        <SelectTempUnit />
        <i className={get(this, 'props.weather.weatherClassName')}></i>
        {this.renderMap()}
        {this.renderForecast()}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast, airQuality, weatherMap }) => {
  return { settings, weather, forecast, airQuality, weatherMap }
}

export default connect(mapStateToProps, actions)(IndexPage);
