import React, { Component } from 'react'
import DefaultLayout from '../layouts/default'
import PageLoader from '../components/page-loader'
import { userService, authenticationService } from '../services'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: authenticationService.currentUserValue,
      loading: true,
      users: null
    }
  }

  async loadData() {
    setTimeout(() => {
      userService.getAll().then((users) => this.setState({
        loading: false,
        users
      }))
    }, 800)
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    const { currentUser, loading, users } = this.state

    return (
      <>
        <PageLoader loading={loading} />
        <DefaultLayout title="Dashboard">
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
      </>
    )
  }
}

export default Dashboard
