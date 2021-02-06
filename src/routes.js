import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home/index'
import SessionUser from './pages/SessionUser/index'
import Bares from './pages/Bares/Index'
import NotFound from './pages/NotFound/index'

import { isAuthenticated } from "./services/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)
 const Routes = () => {
  return (
    <>
    
    <BrowserRouter>
   
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bares" exact component={Bares} />
            <PrivateRoute path="/session_user" exact component={SessionUser} />
            <Route path="*" exact component={NotFound} />
        </Switch> 
      
     </BrowserRouter>
    
    </>
  )
}

export default Routes