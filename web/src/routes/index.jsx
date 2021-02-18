import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/about'
import Login from '../pages/auth/login'
import ResetPassword from '../pages/auth/reset-password'
import Dashboard from '../pages/dashboard'
import Users from '../pages/users'

/**
  * References:
 * https://github.com/Mediumtutorial/react-router-medium
*/

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/about" component={About} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/user/:id" component={Users} />
    </Switch>
  )
}

export default Routes
