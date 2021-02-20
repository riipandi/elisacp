import React, { Component } from 'react'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import PlainLayout from '../../layouts/plain'
import { authenticationService } from '../../services'
import LoginForm from './login-form';
import ResetPass from './reset-pass';
import PageLoader from '../../components/page-loader'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      showForm: true,
      authStatus: null
    }

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push('/')
    }
  }

  onClickForm = () => this.setState( { showForm: this.state.showForm ? false : true } )

  render() {
    const { loading, authStatus, showForm } = this.state

    return (
      <PlainLayout title="Login">
        <PageLoader loading={loading} />
        <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="w-auto h-16 mx-auto" src={logo} alt="logo" />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Sign in to Control Panel
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            {showForm ? <LoginForm authStatus={authStatus} loading={loading} /> : <ResetPass />}
            <div className="mx-auto mt-8 text-sm font-medium text-center">
              <a onClick={this.onClickForm} className="ml-1 cursor-pointer text-primary-600 hover:text-primary-500">
                Remember your password?
              </a>
            </div>
          </div>
        </div>
      </PlainLayout>
    )
  }
}

export default Login
