import { TextField, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import mucSearchStyles from './MucSearchStyles'

class MucSearch extends Component {
  render() {
    let { hamHandleChange } = this.props
    return (
      <form noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          onChange={hamHandleChange}
          margin="normal"
          placeholder="Nhập KW search..."
        />
      </form>
    )
  }
}
MucSearch.propTypes = {
  hamHandleChange: PropTypes.func,
}

export default withStyles(mucSearchStyles)(MucSearch)