import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'

import SelectTempUnit from '../components/SelectTempUnit'
import WeatherTriggers from '../components/WeatherTriggers'

import '../assets/scss/components/SideDrawer.scss'

class SideDrawer extends React.Component {
  constructor(props) {
    super(props)
  }
  getClassNames = () => {
    let { sideDrawer } = this.props
    let classNames = sideDrawer.isOpen ? 'ws-sideDrawer ws-sideDrawer--isOpen' : 'ws-sideDrawer ws-sideDrawer--isClosed'

    return classNames;
  }
  render() {
    return (
      <div
        className={this.getClassNames()}
      >
        <div className="ws-sideDrawer-content">
          <div>
            <SelectTempUnit />
            <WeatherTriggers />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ settings, sideDrawer }) => {
  return { settings, sideDrawer }
}

export default connect(mapStateToProps, actions)(SideDrawer);
