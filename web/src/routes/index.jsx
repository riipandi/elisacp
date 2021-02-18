import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/about'
import Login from '../pages/auth/login'
import ResetPassword from '../pages/auth/reset-password'
import Dashboard from '../pages/dashboard'
import Users from '../pages/users'
import Error404 from '../pages/error/404-web'
import Error404JSON from '../pages/error/404-api'
import { PrivateRoute } from '../components/private-route';

/**
  * References:
 * https://github.com/Mediumtutorial/react-router-medium
*/

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/user/:id" component={Users} />
      <Route path="/api/*" component={Error404JSON} />
      <Route path="*" component={Error404} />
    </Switch>
  )
}

export default Routes
