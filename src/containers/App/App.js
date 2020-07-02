import React, { Component } from 'react'
import { withStyles, ThemeProvider } from '@material-ui/core'
import TB from '../TaskBoard/TB'
import appStyles from './AppStyles'
import themeCSS from '../../commons/Theme/ThemeCSS'
import { Provider } from 'react-redux'
import cauhinhStore from '../../redux/StoreReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GlobalLoad from '../../components/GlobalLoad/GlobalLoad'
import ModalComp from '../../components/ModalComp/ModalComp'

const store = cauhinhStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeCSS}>
          <ToastContainer />
          <TB />
          <GlobalLoad />
          <ModalComp />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withStyles(appStyles)(App)