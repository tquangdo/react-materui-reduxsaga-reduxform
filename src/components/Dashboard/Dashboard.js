import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Dashboard/Header/Header'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import { withStyles } from '@material-ui/core'
import dashboardStyles from './DashboardStyles'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as uiAction from '../../redux/actions/UIAction'
import cn from 'classnames'

class Dashboard extends Component {
    hamToggleSidebar = bool_val => {
        const { uiActionCreators } = this.props
        const { hienSidebar, anSidebar } = uiActionCreators
        if (bool_val) {
            hienSidebar()
        } else {
            anSidebar()
        }
    }
    render() {
        const { name, children, classes, reduxprop_showSB } = this.props
        return (
            <div>
                <Header name={name} hamToggleSidebar={this.hamToggleSidebar}
                    showSB={reduxprop_showSB} />
                <div className={classes.wrapper}>
                    <Sidebar hamToggleSidebar={this.hamToggleSidebar}
                        showSB={reduxprop_showSB} />
                    <div className={cn(classes.wrapperContent, {
                        [classes.shiftLeft]: !reduxprop_showSB,
                    })}> {children}</div>
                </div>
            </div>
        )
    }
}
Dashboard.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.object,
    name: PropTypes.string,
    reduxprop_showSB: PropTypes.bool,
    uiActionCreators: PropTypes.shape({
        hienSidebar: PropTypes.func,
        anSidebar: PropTypes.func,
    }),
}
const mapState2Props = state => {
    return {
        reduxprop_showSB: state.reducerUI.showSB
    }
}
const mapDispatch2Props = dispatch => {
    return {
        uiActionCreators: bindActionCreators(uiAction, dispatch),
    }
}

export default compose(
    withStyles(dashboardStyles),
    connect(
        mapState2Props,
        mapDispatch2Props,
    )
)(Dashboard)
