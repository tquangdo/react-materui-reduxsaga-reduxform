import React, { Component } from 'react'
import { withStyles, ThemeProvider } from '@material-ui/core'
import TB from '../TaskBoard/TB'
import appStyles from './AppStyles'
import themeCSS from '../../commons/Theme/ThemeCSS'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeCSS}>
        <TB />
      </ThemeProvider>
    )
  }
}

export default withStyles(appStyles)(App)