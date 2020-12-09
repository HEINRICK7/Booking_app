import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/index'
import SessionUser from './pages/SessionUser/index'

 const Routes = () => {
  return (
    <>
    
    <BrowserRouter>
   
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/session_user" exact component={SessionUser} />
           
        </Switch> 
      
     </BrowserRouter>
    
    </>
  )
}

export default Routes