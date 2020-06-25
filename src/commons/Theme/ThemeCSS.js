import { createMuiTheme } from '@material-ui/core/styles'

const themeCSS = createMuiTheme({
    mauSac: {
        primary: "#9c27b0",
        secondary: "#f50057",
        error: "#f44336"
    },
    typography: {
        fontFamily: "Roboto"
    },
    hinhDang: {
        backgroundColor: "red",
        textColor: "yellow",
        borderRadius: 10
    }
})

export default themeCSS