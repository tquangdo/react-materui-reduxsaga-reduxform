import React, { Component } from 'react'
import { withStyles, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import AddCircle from '@material-ui/icons/AddCircle'
import PropTypes from 'prop-types'
import tbStyles from './TBStyles'
import { STATUS } from '../../constants/Constants'
import { MOCK_LIST_CONST } from '../../constants/MockListConst'
import MockList from '../../components/MockList/MockList'
import TaskForm from '../../components/TaskForm/TaskForm'

class TB extends Component {
  state = {
    moForm: false,
  }
  hienGrid = () => {
    const xhtml = (
      <Grid container
        spacing={2}>
        {
          STATUS.map((status, chiso) => {
            const taskLoc = MOCK_LIST_CONST.filter(mock => mock.status === status.value)
            return (
              <MockList
                key={chiso}
                taskLoc={taskLoc}
                status={status}
                chiso={chiso}
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
          onClick={this.hamMoForm}>
          <AddCircle /> Thêm mới
        </Button>
        {this.hienGrid()}
        {this.hamRenderForm()}
      </div>
    )
  }
}

TB.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(tbStyles)(TB)