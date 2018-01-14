import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/actions'

import menuIcon from '../assets/images/feather/menu.svg'

class SideDrawerTrigger extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button
        className="ws-sideDrawer-trigger"
        onClick={() => this.props.onClick(this.props.sideDrawer.isOpen)}
      >
        <img
          src={menuIcon}
        />
      </button>
    )
  }
}

const mapStateToProps = ({ settings, sideDrawer }) => {
  return { settings, sideDrawer }
}

export default connect(mapStateToProps, actions)(SideDrawerTrigger);
