import React from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import axios from 'axios'
import get from 'lodash/get'
import Moment from 'react-moment'


import { rhythm, scale } from '../utils/typography'
import * as actions from '../state/actions';

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
  render() {
    return (
      <div>
        <SelectTempUnit />
        <i className={get(this, 'props.weather.weatherClassName')}></i>
        {this.renderForecast()}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast, airQuality }) => {
  return { settings, weather, forecast, airQuality }
}

export default connect(mapStateToProps, actions)(IndexPage);
