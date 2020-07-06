import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Dashboard from '../../components/Dashboard/Dashboard';
import PropTypes from 'prop-types'

class QuanTriLayoutRoute extends Component {
    render() {
        const { component: Comp, ...propsConLai } = this.props // routeProps: path, name, exact
        return (
            <Route
                {...propsConLai}
                render={routeProps => { // routeProps: history...
                    return (
                        <Dashboard {...propsConLai}>
                            <Comp {...routeProps} />
                        </Dashboard>
                    )
                }}
            ></Route>
        );
    }
}
QuanTriLayoutRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

export default QuanTriLayoutRoute;