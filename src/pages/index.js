import React from 'react'
import { connect } from 'react-redux'
import Link from 'gatsby-link'
import axios from 'axios'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'
import * as actions from '../state/actions';

import Header from '../components/Header'
import SelectTempUnit from '../components/SelectTempUnit'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('IndexPage | componentDidMount:this.props', this.props);
    this.props.getCurrentWeather(this.props.settings.unit)
  }
  componentWillReceiveProps() {
    // console.log('IndexPage | componentWillReceiveProps:this.props', this.props);
  }
  render() {
    return (
      <div>
        <SelectTempUnit />
        <i className={get(this, 'props.weather.weatherClassName')}></i>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, actions)(IndexPage);
