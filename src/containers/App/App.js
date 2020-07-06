import React, { Component } from 'react'
import { withStyles, ThemeProvider, CssBaseline } from '@material-ui/core'
import appStyles from './AppStyles'
import themeCSS from '../../commons/Theme/ThemeCSS'
import { Provider } from 'react-redux'
import cauhinhStore from '../../redux/StoreReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' //set with ToastContainer
import GlobalLoad from '../../components/GlobalLoad/GlobalLoad'
import ModalComp from '../../components/ModalComp/ModalComp'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ADMIN_ROUTES } from '../../constants/CommonConstants'
import QuanTriLayoutRoute from '../../commons/QuanTriLayoutRoute/QuanTriLayoutRoute'

const store = cauhinhStore()
class App extends Component {
  hamRenderAdRoutes() {
    let xhtml = null
    xhtml = ADMIN_ROUTES.map((route, chiso) => {
      return <QuanTriLayoutRoute key={chiso}
        // phải truyền từng cái, KO được truyền 1 cục route
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      />
    })
    return xhtml
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={themeCSS}>
            <CssBaseline />
            <ToastContainer />
            <Switch>
              {this.hamRenderAdRoutes()}
            </Switch>
            <GlobalLoad />
            <ModalComp />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default withStyles(appStyles)(App)