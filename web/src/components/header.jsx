import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { authenticationService } from '../services'
import { history } from '../utils';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) => this.setState({ currentUser: x }))
  }

  logout() {
    authenticationService.logout()
    history.push('/login')
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className="space-x-4">
        {currentUser && (
          <div className="space-x-6">
            <Link to="/" className="text-lg text-primary-500">
              Dashboard
            </Link>
            <Link to="/about" className="text-lg text-primary-500">
              About
            </Link>
            <a onClick={this.logout} className="text-lg cursor-pointer text-primary-500">
              Sign Out
            </a>
          </div>
        )}
        {!currentUser && (
          <div>
            <Link to="/login" className="text-lg text-primary-500">
              Sign In
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default Header
