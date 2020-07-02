import { withStyles, Modal } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import modalCompStyles from './ModalCompStyles'
import Clear from '@material-ui/icons/Clear'
import { connect } from 'react-redux'
import * as modalAction from '../../redux/actions/ModalAction'
import { compose, bindActionCreators } from 'redux'

class ModalComp extends Component {
  render() {
    const { classes, reduxprop_open, reduxprop_title, reduxprop_component,
      modalActionCreators } = this.props
    const { anModal } = modalActionCreators
    return (
      <Modal open={reduxprop_open} onClose={anModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <h2>{reduxprop_title}</h2>
            <Clear className={classes.icon} onClick={anModal} />
          </div>
          <div>{reduxprop_component}</div>
        </div>
      </Modal>
    )
  }
}

ModalComp.propTypes = {
  classes: PropTypes.object,
  reduxprop_open: PropTypes.bool,
  reduxprop_title: PropTypes.string,
  reduxprop_component: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    anModal: PropTypes.func,
  }),
}
const mapState2Props = state => {
  return {
    reduxprop_open: state.reducerModal.hienModal,
    reduxprop_title: state.reducerModal.title,
    reduxprop_component: state.reducerModal.component,
  }
}
const mapDispatch2Props = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalAction, dispatch),
  }
}

export default compose(
  withStyles(modalCompStyles),
  connect(
    mapState2Props,
    mapDispatch2Props,
  )
)(ModalComp)
