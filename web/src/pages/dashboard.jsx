import React, { Component } from 'react'
import DefaultLayout from '../layouts/default'

import { userService, authenticationService } from '../services'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: authenticationService.currentUserValue,
      users: null
    }
  }

  componentDidMount() {
    userService.getAll().then((users) => this.setState({ users }))
  }

  render() {
    const { currentUser, users } = this.state

    return (
      <DefaultLayout>
        <h2>Dashboard</h2>
        <div>
          <h1>Hi {currentUser.name}!</h1>
          <p>You're logged in with React &amp; JWT!!</p>
          <h3>Users from secure api end point:</h3>
          {/* {users && (
            <ul>
              {users.map((user) => (
                <li key="{user.ID}">
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )} */}
        </div>
      </DefaultLayout>
    )
  }
}

export default Dashboard
