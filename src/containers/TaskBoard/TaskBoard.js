import { Grid, withStyles, Box } from '@material-ui/core'
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
import tbStyles from './TaskBoardStyles'

class TaskBoard extends Component {
  // cách khai báo state rút gọn
  // state = {
  //   moForm: false,
  // }
  componentDidMount = () => {
    const { taskActionCreators } = this.props
    taskActionCreators.resetListTask()
  }
  hamOnEdit = arg_mock => {
    const { taskActionCreators, modalActionCreators } = this.props
    const { editTask } = taskActionCreators
    editTask(arg_mock)
    const { hienModal, doiModalTitle, doiModalND } = modalActionCreators
    hienModal()
    doiModalTitle('Chỉnh sửa task')
    doiModalND(<TaskForm />)
  }
  hamHandleDelete = arg_mock => {
    const { taskActionCreators } = this.props
    taskActionCreators.xoaTask(arg_mock.id)
  }
  hamOnDelete = arg_mock => {
    const { modalActionCreators } = this.props
    const { hienModal, doiModalTitle, doiModalND, anModal } = modalActionCreators
    hienModal()
    doiModalTitle('Xóa task')
    doiModalND(
      <div>
        <h3>
          Bạn có chắc chắn muốn xóa task:{' '}
          <i>{arg_mock.title}</i>?
        </h3>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1} mb={1} mr={1}>
            <Button variant="contained" onClick={anModal}>Hủy</Button>
          </Box>
          <Box>
            <Button variant="contained"
              color="primary"
              onClick={() => this.hamHandleDelete(arg_mock)}
            >Xóa</Button>
          </Box>
        </Box>
      </div>
    )
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
                hamOnEdit={this.hamOnEdit}
                hamOnDelete={this.hamOnDelete}
              ></MockList>
            )
          })
        }
      </Grid>
    )
    return xhtml
  }
  hamHandleSearch = e => {
    const { taskActionCreators } = this.props
    taskActionCreators.searchTask(e.target.value)
  }
  hamRenderMucSearch = () => {
    return <MucSearch hamHandleSearch={this.hamHandleSearch} />
  }
  hamDongForm = () => {
    const { modalActionCreators } = this.props
    modalActionCreators.anModal()
  }
  hamMoForm = () => {
    const { modalActionCreators, taskActionCreators } = this.props
    const { editTask } = taskActionCreators
    editTask(null)
    const { hienModal, doiModalTitle, doiModalND } = modalActionCreators
    hienModal()
    doiModalTitle('Thêm mới task')
    doiModalND(<TaskForm />)
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

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    resetListTask: PropTypes.func,
    searchTask: PropTypes.func,
    editTask: PropTypes.func,
    xoaTask: PropTypes.func,
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
)(TaskBoard)