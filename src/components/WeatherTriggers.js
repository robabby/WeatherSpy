import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'
import helpers from '../utils/helpers'

import '../assets/scss/components/WeatherTriggers.scss'

class WeatherTriggers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      renderedTriggers: 0
    }
  }
  getClassNames = () => {
    let { sideDrawer } = this.props
    let classNames = sideDrawer.isOpen ? 'ws-sideDrawer ws-sideDrawer--isOpen' : 'ws-sideDrawer ws-sideDrawer--isClosed'

    return classNames;
  }
  handleNewTrigger = async (event) => {
    let { createNewTrigger, weather } = this.props
    let data = {
      temp: this.refs.triggersInput.value,
      unit: this.props.settings.unit,
      coords: weather.coord
    }
    console.log(data);
    createNewTrigger(data);
  }
  getTriggersAsync = async () => {
    let { getTriggers } = this.props
    await getTriggers()
  }
  handleDeleteTrigger = (id) => {
    console.log(id);
  }
  renderTriggers = () => {
    let { weatherTriggers, settings } = this.props
    let { triggers, haveTriggers } = weatherTriggers
    let renderedTriggers = 0

    if (haveTriggers && triggers.length > 0) {
      return triggers.map((data, i) => {
        console.log("renderTriggers | data ", data);
        renderedTriggers++

        if (renderedTriggers <= triggers.length) {
          let temp = helpers.convertFromKelvinToUnit(data.conditions[0].amount, settings.unit)
          return (
            <div key={i} className="ws-trigger">
              <span>{temp}</span>
              <button
                onClick={this.handleDeleteTrigger(data._id)}
              >DELETE</button>
            </div>
          )
        }
      })
    } else {
      return (
        <div>
          There are no alerts to show
        </div>
      )
    }
  }
  componentWillRecieveProps() {
    if (this.state.renderedTriggers < this.props.weatherTriggers.triggers.length) {
      this.getTriggersAsync();
    }
  }
  render() {
    return (
      <div className="ws-triggers">
        <div className="ws-triggers__newTrigger">
          <h3>Alerts</h3>
          <span>Specify a value and you will be alerted when the temperature exceeds it:</span>
          <br />
          <div className="ws-triggers__form">
            <input type="text" className="ws-triggers__input" ref="triggersInput" />
            <button
              className="ws-triggers__submit"
              ref="triggersSubmit"
              onClick={this.handleNewTrigger}
              >
                Submit
              </button>
          </div>
        </div>
        <div className="ws-triggers__getTriggers">
          <h3>Triggers</h3>
          {this.renderTriggers()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ settings, weatherTriggers, weather }) => {
  return { settings, weatherTriggers, weather }
}

export default connect(mapStateToProps, actions)(WeatherTriggers);
