import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import PlainLayout from '../../layouts/plain'
import { authenticationService } from '../../services'
import PageLoader from '../../components/page-loader'
import * as Yup from 'yup';
import loadersvg from '../../assets/img/loader.svg'
import AlertInline from '../../components/alert-inline'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false }

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push('/')
    }
  }

  async onSubmit(values, formikProps) {
    formikProps.setStatus()
    setTimeout(() => {
      authenticationService.login(values.username, values.password).then((user) => {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        this.props.history.push(from)
      }, (error) => {
        formikProps.setSubmitting(false)
        formikProps.setStatus(error)
      })
    }, 1000)
  };

  render() {
    const { loading } = this.state

    return (
      <PlainLayout title="Login">
        <PageLoader loading={loading} />
        <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="w-auto h-20 mx-auto" src={logo} alt="logo" />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Sign in to Control Panel
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <Formik
                initialValues = {{ username: '', password: '' }}
                validationSchema = {Yup.object().shape({
                    username: Yup.string().required('Username is required'),
                    password: Yup.string().required('Password is required')
                })}
                onSubmit={this.onSubmit}
              >
                {({ errors, status, touched, isSubmitting }) => (
                  <Form className="space-y-5">
                    {status && <AlertInline message={status} color="yellow" />}
                    <div>
                      <label htmlFor="username" className="sr-only">
                        Username
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="username"
                          placeholder="Username"
                          className={'block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm' + (errors.username && touched.username ? ' border-red-500' : '')}
                        />
                        <ErrorMessage
                          name="username"
                          component="span"
                          className="pt-1 mx-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <div className="mt-1">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className={'block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm' + (errors.password && touched.password ? ' border-red-500' : '')}
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="pt-1 mx-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        {isSubmitting && <img src={loadersvg} className="w-auto h-4" alt="loader" />}
                        {!isSubmitting && <span>Sign in</span>}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="mx-auto mt-8 text-sm font-medium text-center">
              <span>Forgot your password?</span>
              <Link to="/reset-password" className="ml-1 text-primary-600 hover:text-primary-500">
                Reset here
              </Link>
            </div>
          </div>
        </div>
      </PlainLayout>
    )
  }
}

export default Login
