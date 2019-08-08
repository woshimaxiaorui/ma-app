import React from 'react'
import { BrowserRouter as Router,Route,Switch, } from "react-router-dom";// Redirect
import Login from '@/pages/login'
import Home from '@/pages/home'
class RouterCom extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/home" component={ Home } />
          <Route path="/" component={ Login } />
          {/* <Redirect to="home"></Redirect> */}
        </Switch>
      </Router>
    )
  }
}
export default RouterCom