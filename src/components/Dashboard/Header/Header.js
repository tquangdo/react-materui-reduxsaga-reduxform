import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Component } from 'react'
import { withStyles, Badge } from '@material-ui/core'
import headerStyles from './HeaderStyles'
import PropTypes from 'prop-types'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'

const menuId = 'primary-search-account-menu'

class Header extends Component {
    state = {
        anchorEl: null,
    }

    hamProfileMenuOpen = e => {
        this.setState({
            anchorEl: e.currentTarget,
        })
    }

    hamHandleMenuClose = () => {
        this.setState({
            anchorEl: null,
        })
    }

    renderMenu = () => {
        const { anchorEl } = this.state
        const isMenuOpen = Boolean(anchorEl)
        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.hamHandleMenuClose}
            >
                <MenuItem onClick={this.hamHandleMenuClose}>Logout</MenuItem>
            </Menu>
        )
    }

    hamToggleSidebar = () => {
        const { showSB, hamToggleSidebar } = this.props
        hamToggleSidebar(!showSB)
    }

    render() {
        const { classes, name } = this.props
        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.hamToggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            {name}
                        </Typography>

                        {/* <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div> */}

                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="Account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={this.hamProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {this.renderMenu()}
            </div>
        )
    }
}
Header.propTypes = {
    classes: PropTypes.object,
    name: PropTypes.string,
    showSB: PropTypes.bool,
    hamToggleSidebar: PropTypes.func,
}

export default withStyles(headerStyles)(Header)
