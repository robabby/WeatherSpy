import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'
import helpers from '../utils/helpers'

import ShowTemp from '../components/ShowTemp'

import '../assets/scss/components/CurrentConditions.scss'

class CurrentConditions extends React.Component {
  constructor(props) {
    super(props)
  }
  renderCurrentConditions = () => {
    let { forecast, weather } = this.props
    let { temp, humidity } = weather
    let { city } = forecast

    if (weather && city) {
      return (
        <div className="ws-current__meta">
          <h3 className="meta__location">{city.name}, {city.country}</h3>
          <div className="meta__temp">
            <i className={weather.iconClassName}></i>
            <h1><ShowTemp temp={weather.main.temp} /></h1>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          loading...
        </div>
      )
    }
  }
  render() {
    return (
      <div className="ws-current">
        {this.renderCurrentConditions()}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weather, forecast }) => {
  return { settings, weather, forecast }
}

export default connect(mapStateToProps, actions)(CurrentConditions);
