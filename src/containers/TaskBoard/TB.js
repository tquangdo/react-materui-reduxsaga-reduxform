import { Grid, withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import AddCircle from '@material-ui/icons/AddCircle'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import MockList from '../../components/MockList/MockList'
import MucSearch from '../../components/MucSearch/MucSearch'
import TaskForm from '../TaskForm/TaskForm'
import { STATUS } from '../../constants/CommonConstants'
import * as taskAction from '../../redux/actions/TaskAction'
import * as modalAction from '../../redux/actions/ModalAction'
import tbStyles from './TBStyles'

class TB extends Component {
  // cách khai báo state rút gọn
  // state = {
  //   moForm: false,
  // }
  componentDidMount = () => {
    const { taskActionCreators } = this.props
    taskActionCreators.resetListTask()
  }
  hienGrid = () => {
    const { reduxprop_dsTask } = this.props
    const xhtml = (
      <Grid container
        spacing={2}>
        {
          STATUS.map(status => {
            const taskLoc = reduxprop_dsTask.filter(mock => mock.status === status.value)
            return (
              <MockList
                key={status.value} //trong Grid: CHƯA LÀM (0), ĐANG LÀM (1)...
                taskLoc={taskLoc}
                status={status}
              ></MockList>
            )
          })
        }
      </Grid>
    )
    return xhtml
  }
  hamHandleChange = e => {
    const { taskActionCreators } = this.props
    taskActionCreators.searchTask(e.target.value)
  }
  hamRenderMucSearch = () => {
    return <MucSearch hamHandleChange={this.hamHandleChange} />
  }
  hamDongForm = () => {
    const { modalActionCreators } = this.props
    modalActionCreators.anModal()
  }
  hamMoForm = () => {
    const { modalActionCreators } = this.props
    modalActionCreators.hienModal()
    modalActionCreators.doiModalTitle('Thêm mới task')
    modalActionCreators.doiModalND(<TaskForm />)
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained"
          color="primary"
          style={{ marginLeft: 20 }}
          // trong onClick thì hàm KO cần ()
          onClick={this.hamMoForm}>
          <AddCircle /> Thêm mới
        </Button>
        {/* KO trong onClick thì hàm cần () */}
        {this.hamRenderMucSearch()}
        {this.hienGrid()}
      </div>
    )
  }
}

TB.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    resetListTask: PropTypes.func,
    searchTask: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    hienModal: PropTypes.func,
    anModal: PropTypes.func,
    doiModalTitle: PropTypes.func,
    doiModalND: PropTypes.func,
  }),
  reduxprop_dsTask: PropTypes.array,
}
const mapState2Props = state => {
  return {
    reduxprop_dsTask: state.reducerTask.dsTask
  }
}
const mapDispatch2Props = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskAction, dispatch),
    modalActionCreators: bindActionCreators(modalAction, dispatch),
  }
}

export default compose(
  withStyles(tbStyles),
  connect(
    mapState2Props,
    mapDispatch2Props,
  )
)(TB)