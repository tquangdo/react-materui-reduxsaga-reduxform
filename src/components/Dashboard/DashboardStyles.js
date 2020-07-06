const dashboardStyles = theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    wrapperContent: {
        width: '100%',
        padding: 10,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    shiftLeft: {
        marginLeft: -240, //SidebarStyles.js: width: 240,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
})

export default dashboardStyles