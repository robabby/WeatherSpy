import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'
import api from '../utils/api'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weatherClassName: '',
      unit: 'imperial',
      main: {},
      weather: {},
      temp: {
        imperial: {
          current: 0,
          min: 0,
          max: 0
        },
        metric: {
          current: 0,
          min: 0,
          max: 0
        }
      },
      humidity: 0,
      wind: 0
    }

    this.handleUnitChange = this.handleUnitChange.bind(this);
  }
  getCurrentWeather = async () => {
    let unit = this.state.unit !== 'both' ? this.state.unit : 'metric'

    axios.get(api.getWeatherUrl(unit))
      .then(async res => {
        const { data } = res;
        console.log('/res.data/', data);

        let temp = {...this.state.temp};

        temp[unit].current = data.main.temp
        temp[unit].min = data.main.temp_min
        temp[unit].max = data.main.temp_max

        await this.setState({
          main: data.main,
          weather: data.weather[0],
          temp,
          humidity: data.main.humidity,
          wind: data.wind
        });

        console.log('/this.state/', this.state)
      })
      .then(async () => {
        const weatherClassName = 'wi wi-owm-' + get(this, 'state.weather.id');
        await this.setState({
          weatherClassName
        });
      })
  }
  async handleUnitChange(event) {
    await this.setState({unit: event.target.value});
    this.getCurrentWeather();
  }

  componentDidMount() {
    this.getCurrentWeather()
  }
  render() {
    return (
      <div>
        <select onChange={this.handleUnitChange} value={this.state.unit}>
          <option value="imperial">Imperial</option>
          <option value="metric">Metric</option>
          <option value="both">Both</option>
        </select>
        <i className={get(this, 'state.weatherClassName')}></i>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
    )
  }
}

export default IndexPage
