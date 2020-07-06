import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

class UserLayoutRoute extends Component {
    render() {
        const { component: Comp, ...propsConLai } = this.props // routeProps: path, name, exact
        return (
            <Route
                {...propsConLai}
                render={routeProps => { // routeProps: history...
                    return <Comp {...routeProps} />
                }}
            ></Route>
        )
    }
}
UserLayoutRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

export default UserLayoutRoute