import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
    

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
   
    html, body {
        font-family: 'Comfortaa';
        a {
            text-decoration: none;
        }
        #app {
            display: flex;
        }
    }
`

export const size = {
    //key
    mobileS: '320', 
    mobileM: '375',
    mobileL: '1100',
}

export const portrait = {
    mobile_l_landscape: '321'
}

export const mediaQueries = (key) => {
    return style => `@media(max-width: ${size[key]}px){ ${style}}`
}

export const theme = {

    primary : {
        color: '#84A4A4', //green
        buttonColor: '#FFDB5A',
        buttonFontSize: '18px'
    },
    
    secondary: {
        color: '#EDFAFC', //light green
        
    },
    tertiary: {
        color: '#375954'//dark green
    },
    default: {
        color: '#fff',
        h1: '64px',
        h3: '28px',
        mobileFontSize: '18px'
    },
}    


export default GlobalStyle;