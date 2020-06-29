import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import globalLoadStyles from './GlobalLoadStyles'
import loadGIF from '../../assets/images/loading.gif'
import { compose } from 'redux'
import { connect } from 'react-redux'

class GlobalLoad extends Component {
  render() {
    const { classes, reduxprop_showGL } = this.props
    let xhtml = null
    if (reduxprop_showGL) {
      xhtml = (
        <div className={classes.bckgLoad} >
          <img src={loadGIF} alt="load" className={classes.icon}></img>
        </div>
      )
    }
    return xhtml
  }
}
GlobalLoad.propTypes = {
  classes: PropTypes.object,
  reduxprop_showGL: PropTypes.bool,
}
const mapState2Props = state => {
  return {
    reduxprop_showGL: state.reducerUI.showGL
  }
}

export default compose(
  withStyles(globalLoadStyles),
  connect(
    mapState2Props,
    null,
  )
)(GlobalLoad)