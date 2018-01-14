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
      <div>
        <Helmet title={siteTitle} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
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
