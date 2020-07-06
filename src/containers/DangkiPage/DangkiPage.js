import { withStyles, Card, CardContent, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core'
import React, { Component } from 'react'
import dkPageStyles from './DangkiPageStyles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class DangkiPage extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.bckG}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant='caption'>Đăng kí tài khoản</Typography>
                </div>
                <TextField label='Email'
                  fullWidth margin='normal' className={classes.textField} />
                <TextField label='Password' type='password'
                  fullWidth margin='normal' className={classes.textField} />
                <TextField label='Confirm Password' type='password'
                  fullWidth margin='normal' className={classes.textField} />
                <FormControlLabel control={<Checkbox value='ok' />}
                  label='Tôi đã đọc chính sách & OK'
                />
                <Button variant='contained' color='primary' fullWidth type='submit' >
                  Đăng kí
                </Button>
                <div>
                  <Link to='/login' >
                    <Button>Đăng nhập</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

DangkiPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(dkPageStyles)(DangkiPage)