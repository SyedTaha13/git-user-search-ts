import React from 'react'
import { Route, Switch } from "react-router-dom";
import Mainpage from '../MainPage'


const Routes: React.FC = () =>{

    return(
        <Switch>
             <Route exact path='/' component={Mainpage} />
        </Switch>
    )
}

export default Routes ;