import { Button, withStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import taskFormStyles from './TaskFormStyles'

class TaskForm extends Component {
  render() {
    const { moForm, onDong } = this.props
    return (
      <Dialog open={moForm} onClose={onDong} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm mới</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onDong} color="primary">
            Cancel
          </Button>
          <Button onClick={onDong} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

TaskForm.propTypes = {
  moForm: PropTypes.bool,
  onDong: PropTypes.func,
}

export default withStyles(taskFormStyles)(TaskForm)