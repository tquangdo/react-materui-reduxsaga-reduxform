const sidebarStyles = () => ({
    drawerPaper: {
        width: 240, // DashboardStyles.js: marginLeft: -240,
        zIndex: 99,
        height: '100%',
        position: 'relative',
    },
    activeClassName: {
        '&>div': {
            backgroundColor: 'rgba(0,0,0,0.08)' // màu nền khi focus on NavLink
        },
    },
})

export default sidebarStyles