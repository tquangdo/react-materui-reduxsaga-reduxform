import { CssBaseline, ThemeProvider, withStyles } from '@material-ui/core'
import { ConnectedRouter } from 'connected-react-router'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' //set with ToastContainer
import QuanTriLayoutRoute from '../../commons/QuanTriLayoutRoute/QuanTriLayoutRoute'
import themeCSS from '../../commons/Theme/ThemeCSS'
import UserLayoutRoute from '../../commons/UserLayoutRoute/UserLayoutRoute'
import GlobalLoad from '../../components/GlobalLoad/GlobalLoad'
import ModalComp from '../../components/ModalComp/ModalComp'
import { ADMIN_ROUTES, USER_ROUTES } from '../../constants/CommonConstants'
import cauhinhStore, { history } from '../../redux/StoreReducer'
import appStyles from './AppStyles'

const store = cauhinhStore()
class App extends Component {
  hamRenderAdRoutes() {
    let xhtml = null
    if (ADMIN_ROUTES) {
      xhtml = ADMIN_ROUTES.map((route, chiso) => {
        return <QuanTriLayoutRoute key={chiso}
          // phải truyền từng cái, KO được truyền 1 cục route
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      })
    }
    return xhtml
  }
  hamRenderURoutes() {
    let xhtml = null
    if (USER_ROUTES) {
      xhtml = USER_ROUTES.map((route, chiso) => {
        return <UserLayoutRoute key={chiso}
          // phải truyền từng cái, KO được truyền 1 cục route
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      })
    }
    return xhtml
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={themeCSS}>
            <CssBaseline />
            <ToastContainer />
            <Switch>
              {this.hamRenderAdRoutes()}
              {this.hamRenderURoutes()}
            </Switch>
            <GlobalLoad />
            <ModalComp />
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default withStyles(appStyles)(App)