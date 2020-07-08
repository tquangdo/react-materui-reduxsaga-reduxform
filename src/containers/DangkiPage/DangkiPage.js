import {
  Button, Card,
  CardContent, Typography, withStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators, compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { reduxFCheckbox, reduxFTextField } from '../../components/ReduxForm/ReduxF'
import * as authAction from '../../redux/actions/AuthAction'
import { FORM_DANG_KI } from '../../redux/constants/ConfigConst'
import validate from '../TaskForm/Validate'
import dkPageStyles from './DangkiPageStyles'

class DangkiPage extends Component {
  hamSubmitForm = data => {
    const { authActionCreators } = this.props
    const { fullname, email, password } = data
    const { dangki } = authActionCreators
    if (dangki) {
      dangki(fullname, email, password)
    }
  }
  render() {
    const { classes, invalid, submitting, handleSubmit, } = this.props
    return (
      <div className={classes.bckG}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(this.hamSubmitForm)}>
                <div>
                  <Typography variant='caption'>Đăng kí tài khoản</Typography>
                </div>
                <Field label='Họ & tên'
                  fullWidth margin='normal' className={classes.textField}
                  name="fullname"
                  component={reduxFTextField}
                />
                <Field label='Email'
                  fullWidth margin='normal' className={classes.textField}
                  name="email"
                  component={reduxFTextField}
                />
                <Field label='Password' type='password'
                  fullWidth margin='normal' className={classes.textField}
                  name="password"
                  component={reduxFTextField}
                />
                <Field label='Confirm Password' type='password'
                  fullWidth margin='normal' className={classes.textField}
                  name="confirmPassword"
                  component={reduxFTextField}
                />
                <Field
                  component={reduxFCheckbox}
                  label='Tôi đã đọc chính sách & OK'
                  name="isChk"
                />
                <Button
                  disabled={invalid || submitting}
                  variant='contained' color='primary' fullWidth type='submit' >
                  Đăng kí
                </Button>
                <div>
                  <Link to='/' >
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
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  authActionCreators: PropTypes.shape({
    dangki: PropTypes.func,
  }),
}
const withReduxForm = reduxForm({
  form: FORM_DANG_KI,
  validate,
})
const mapDispatchToProps = dispatch => ({
  authActionCreators: bindActionCreators(authAction, dispatch)
})

export default compose(
  withStyles(dkPageStyles),
  connect(
    null,
    mapDispatchToProps
  ),
  withReduxForm,
)(DangkiPage) 
