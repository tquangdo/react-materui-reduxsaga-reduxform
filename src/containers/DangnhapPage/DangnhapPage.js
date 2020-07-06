import { withStyles, Card, CardContent, Typography, TextField, Button } from '@material-ui/core'
import React, { Component } from 'react'
import dnPageStyles from './DangnhapPageStyles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class DangnhapPage extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.bckG}>
        <div>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant='caption'>Đăng nhập</Typography>
                </div>
                <TextField label='Email'
                  fullWidth margin='normal' className={classes.textField} />
                <TextField label='Password' type='password'
                  fullWidth margin='normal' className={classes.textField} />
                <Button variant='contained' color='primary' fullWidth type='submit' >
                  Đăng nhập
                </Button>
                <div>
                  <Link to='/signup' >
                    <Button>Đăng kí tài khoản</Button>
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

DangnhapPage.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(dnPageStyles)(DangnhapPage)