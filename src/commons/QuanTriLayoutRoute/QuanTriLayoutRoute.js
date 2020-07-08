import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from '../../components/Dashboard/Dashboard'
import PropTypes from 'prop-types'
import { TOKEN, REDIRECT_AFTER_DANGKI } from '../../constants/CommonConstants'

class QuanTriLayoutRoute extends Component {
    render() {
        const token = localStorage.getItem(TOKEN)
        const { component: Comp, ...propsConLai } = this.props // routeProps: path, name, exact
        return (
            <Route
                {...propsConLai}
                render={routeProps => { // routeProps: history...
                    return token ? (
                        <Dashboard {...propsConLai}>
                            <Comp {...routeProps} />
                        </Dashboard>
                    ) : (<Redirect to={REDIRECT_AFTER_DANGKI} />)
                }}
            ></Route>
        )
    }
}
QuanTriLayoutRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

export default QuanTriLayoutRoute