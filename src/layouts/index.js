import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'

import '../assets/scss/app.scss'

class Template extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { location, children } = get(this, 'props')

    let rootPath = `/`
    let isRoot = location.pathname === rootPath

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div className="ws-site">
        <Helmet title={siteTitle} />
        {children()}
      </div>
    )
  }
}

export default Template

export const siteQuery = graphql`
  query metadataQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
