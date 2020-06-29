import React, { Component } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import AddCircle from '@material-ui/icons/AddCircle'
import PropTypes from 'prop-types'
import tbStyles from './TBStyles'
import { STATUS } from '../../constants/CommonConstants'
import MockList from '../../components/MockList/MockList'
import TaskForm from '../../components/TaskForm/TaskForm'
import { connect } from 'react-redux'
import * as taskAction from '../../redux/actions/TaskAction'
import { bindActionCreators, compose } from 'redux'

class TB extends Component {
  state = {
    moForm: false,
  }
  componentDidMount = () => {
    const { actionTask } = this.props
    actionTask.resetListTask()
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
  hamRenderForm = () => {
    let { moForm } = this.state
    let xhtml = (
      <TaskForm moForm={moForm}
        onDong={this.hamDongForm}></TaskForm>
    )
    return xhtml
  }
  hamDongForm = () => {
    this.setState({ moForm: false })
  }
  hamMoForm = () => {
    this.setState({ moForm: true })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.taskBoard}>
        {/* <div className={classes.hinhDang}>ReactJS</div>
        <div className={classes.hinhDang}>VueJS</div> */}
        <Button variant="contained"
          color="primary"
          style={{ marginLeft: 20 }}
          // trong onClick thì hàm KO cần ()
          onClick={this.hamMoForm}>
          <AddCircle /> Thêm mới
        </Button>
        {/* KO trong onClick thì hàm cần () */}
        {this.hienGrid()}
        {this.hamRenderForm()}
      </div>
    )
  }
}

TB.propTypes = {
  classes: PropTypes.object,
  actionTask: PropTypes.shape({
    resetListTask: PropTypes.func,
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
    actionTask: bindActionCreators(taskAction, dispatch)
  }
}

export default compose(
  withStyles(tbStyles),
  connect(
    mapState2Props,
    mapDispatch2Props,
  )
)(TB)