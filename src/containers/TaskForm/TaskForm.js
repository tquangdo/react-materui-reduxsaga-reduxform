import { Button, withStyles, Grid, Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import taskFormStyles from './TaskFormStyles'
import { connect } from 'react-redux'
import * as modalAction from '../../redux/actions/ModalAction'
import * as taskAction from '../../redux/actions/TaskAction'
import { compose, bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { TASK_MANAGE } from '../../constants/CommonConstants'
import * as reduxF from '../../components/ReduxForm/ReduxF'
import validate from './Validate'

class TaskForm extends Component {
  hamSubmitForm = data => {
    const { taskActionCreators } = this.props
    const { title, description, type } = data
    taskActionCreators.themTask(title, description, type)
  }
  // required = value => (value || typeof value === 'number' ? undefined : 'Required')
  // minLength = min => value =>
  //   value && value.length < min ? `Must be ${min} characters or more` : undefined
  // minLength2 = this.minLength(2)
  render() {
    const { classes, modalActionCreators, handleSubmit,
      invalid, submitting
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
              component={reduxF.reduxFTextField}
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
              component={reduxF.reduxFTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              className={classes.textField}
              margin="normal"
              name="type"
              component={reduxF.reduxFRadio}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={anModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Button
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                Lưu Lại
              </Button>
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
  }),
  modalActionCreators: PropTypes.shape({
    anModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
}
// const mapState2Props = state => {
//   return {
//     reduxprop_dsTask: state.reducerTask.dsTask
//   }
// }
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
    null,
    mapDispatch2Props,
  ),
  withReduxForm
)(TaskForm)
