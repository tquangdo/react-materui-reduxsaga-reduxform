import { TextField, withStyles, InputAdornment } from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import mucSearchStyles from './MucSearchStyles'
import SearchIcon from '@material-ui/icons/Search'

class MucSearch extends Component {
  render() {
    const { hamHandleSearch, classes } = this.props
    return (
      <form noValidate autoComplete="off">
        <TextField className={classes.textField}
          autoComplete="off"
          onChange={hamHandleSearch}
          margin="normal"
          placeholder="Nhập KW search (phân biệt HOA & thường)..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
    )
  }
}
MucSearch.propTypes = {
  classes: PropTypes.object,
  hamHandleSearch: PropTypes.func,
}

export default withStyles(mucSearchStyles)(MucSearch)