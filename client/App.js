import React from 'react'
import { ThemeProvider } from 'styled-components'
import {theme} from './reusable/global'
import GlobalStyle from './reusable/global'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Step1 from './components/Step1'
import Step2 from './components/Step2'



const App = () => {

    return(
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route exact path="/" component={Step1}></Route>
                <Route exact path="/step2" component={Step2}></Route>
            </Switch>
        </Router>
    </ThemeProvider>
    </>
    )
}

export default App;