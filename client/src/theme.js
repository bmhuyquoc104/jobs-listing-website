import {createTheme} from '@mui/material'

// Create theme for the website
export const theme = createTheme({
    palette : {
        primary:{
            main:"hsl(180, 29%, 50%)"
        },

        backgroundNeutral:{
            main:"hsl(180, 52%, 96%)"
        },
        filterNeutral:{
            main:"hsl(180, 31%, 95%)"
        },
        neutral2:{
            main:"hsl(180, 8%, 52%)"
        },
        neutral3:{
            main:"red"
        }
    },
    typography:{
        fontSize:15,
        fontFamily:['League Spartan', 'sans-serif'].join(","),
    },
    breakpoints: {
        values:{
            xs:0,
            sm:650,
            md:790,
        }
    }
})