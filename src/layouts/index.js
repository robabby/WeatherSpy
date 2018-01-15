import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'
import SideDrawer from '../components/SideDrawer'
import SideDrawerTrigger from '../components/SideDrawerTrigger'
import * as actions from '../state/actions'

import '../assets/scss/app.scss'

class Template extends React.Component {
  constructor(props) {
    super(props)
  }
  handleSideDrawerTrigger = (event) => {
    let { sideDrawer, toggleSideDrawer } = get(this, 'props')
    toggleSideDrawer(sideDrawer.isOpen)
  }
  componentDidMount() {
    console.log("Template | this.props", get(this, 'props'));
    let { getTriggers } = get(this, 'props')

    getTriggers()
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { location, children, sideDrawer } = get(this, 'props')

    let rootPath = `/`
    let isRoot = location.pathname === rootPath

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="ws-site">
        <Helmet title={siteTitle} />
        <SideDrawerTrigger onClick={this.handleSideDrawerTrigger} />
        <SideDrawer isOpen={sideDrawer.isOpen} />
        {children()}
      </div>
    )
  }
}

const mapStateToProps = ({ settings, sideDrawer, weatherTriggers }) => {
  return { settings, sideDrawer, weatherTriggers }
}

export default connect(mapStateToProps, actions)(Template);

export const siteQuery = graphql`
  query metadataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
