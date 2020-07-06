import React, { Component } from 'react'
import { List, ListItem, Drawer, withStyles } from '@material-ui/core'
import { ADMIN_ROUTES } from '../../../constants/CommonConstants'
import sidebarStyles from './SidebarStyles'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
    hamDongDrawer = () => {
        const { hamToggleSidebar } = this.props
        hamToggleSidebar(false)
    }
    hamRenderList = () => {
        const { classes } = this.props
        const xhtml = (
            <div>
                <List component="div">
                    {
                        ADMIN_ROUTES.map((route, chiso) => {
                            return (
                                <NavLink key={chiso} to={route.path}
                                    exact={route.exact} activeClassName={classes.activeClassName}
                                >
                                    <ListItem button>
                                        {route.name}
                                    </ListItem>
                                </NavLink>
                            )
                        })
                    }
                </List>
            </div>
        )
        return xhtml
    }
    render() {
        const { showSB, classes } = this.props
        return (
            <Drawer open={showSB} onClose={this.hamDongDrawer}
                classes={{ paper: classes.drawerPaper, }}
                variant='persistent'
            >
                {this.hamRenderList()}
            </Drawer>
        )
    }
}
Sidebar.propTypes = {
    classes: PropTypes.object,
    showSB: PropTypes.bool,
    hamToggleSidebar: PropTypes.func,
}

export default withStyles(sidebarStyles)(Sidebar)
