import { Button, withStyles, Grid, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import taskFormStyles from './TaskFormStyles'
import { connect } from 'react-redux'
import * as modalAction from '../../redux/actions/ModalAction'
import * as taskAction from '../../redux/actions/TaskAction'
import { compose, bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { reduxFSelectField, reduxFTextField, reduxFRadio } from '../../components/ReduxForm/ReduxF'
import validate from './Validate'
import { TASK_MANAGE } from '../../redux/constants/ConfigConst'

class TaskForm extends Component {
  hamSubmitForm = data => {
    const { taskActionCreators, reduxprop_editTask } = this.props
    const { title, description, type, status } = data
    const { themTask, suaTask } = taskActionCreators
    if (reduxprop_editTask && reduxprop_editTask.id) {
      suaTask(title, description, type, parseInt(status))
    } else {
      themTask(title, description, type)
    }
  }
  hamRenderStatusSelect = () => {
    let xhtml = null
    const { reduxprop_editTask,
    } = this.props
    if (reduxprop_editTask && reduxprop_editTask.id) {
      xhtml = (
        <Field
          label="Trạng thái"
          name="status"
          component={reduxFSelectField}
        >
          <option value={0}>CHƯA LÀM</option>
          <option value={1}>ĐANG LÀM</option>
          <option value={2}>ĐÃ XONG</option>
        </Field>
      )
    }
    return xhtml
  }
  // ***★★Validate in field, NOT in golbal
  // required = value => (value || typeof value === 'number' ? undefined : 'Required')
  // minLength = min => value =>
  //   value && value.length < min ? `Must be ${min} characters or more` : undefined
  // minLength2 = this.minLength(2)
  render() {
    const { classes, modalActionCreators, handleSubmit,
      invalid, submitting,
    } = this.props
    const { anModal } = modalActionCreators
    return (
      // <Dialog open={moForm} onClose={onDong} aria-labelledby="form-dialog-title">
      //   <DialogTitle id="form-dialog-title">Thêm mới</DialogTitle>
      //   <DialogContent>
      //     <TextField
      //       id="standard-name"
      //       label="Name"
      //     />
      //     <TextField
      //       id="standard-multiline-flexible"
      //       label="Multiline"
      //       multiline
      //       rowsMax="4"
      //     />
      //   </DialogContent>
      //   <DialogActions>
      //     <Button onClick={onDong} color="primary">
      //       Cancel
      //     </Button>
      //     <Button onClick={onDong} color="primary">
      //       OK
      //     </Button>
      //   </DialogActions>
      // </Dialog>
      <form onSubmit={handleSubmit(this.hamSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={reduxFTextField}
            // ***★★Validate in field, NOT in golbal
            // validate={[this.required, this.minLength2]}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              label="Mô tả"
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="description"
              component={reduxFTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              className={classes.textField}
              margin="normal"
              name="type"
              component={reduxFRadio}
            />
          </Grid>
          {this.hamRenderStatusSelect()}
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1} mb={1} mr={1}>
                <Button variant="contained" onClick={anModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Box>
                <Button
                  disabled={invalid || submitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Lưu Lại
              </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    )
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    themTask: PropTypes.func,
    suaTask: PropTypes.func,
  }),
  modalActionCreators: PropTypes.shape({
    anModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  reduxprop_editTask: PropTypes.object,
}
const mapState2Props = state => {
  const { editTask } = state.reducerTask
  return {
    reduxprop_editTask: editTask,
    initialValues: {
      title: editTask ? editTask.title : '',
      description: editTask ? editTask.description : '',
      type: editTask ? editTask.type : '',
      status: editTask ? editTask.status : '',
    }
  }
}
const mapDispatch2Props = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskAction, dispatch),
    modalActionCreators: bindActionCreators(modalAction, dispatch),
  }
}
const withReduxForm = reduxForm({
  form: TASK_MANAGE,
  validate,
})

export default compose(
  withStyles(taskFormStyles),
  connect(
    mapState2Props,
    mapDispatch2Props,
  ),
  withReduxForm,
)(TaskForm)
