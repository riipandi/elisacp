import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import loadersvg from '../../assets/img/loader.svg'
import AlertInline from '../../components/alert-inline'

const formInitialValue = { identity: '', password: '' }
const errors = {}

function submitForm(values, formikProps) {
    formikProps.setStatus()
    this.setState({ loading: true })
    setTimeout(() => {
      authenticationService.login(values.identity, values.password).then((user) => {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        this.props.history.push(from)
      }, (error) => {
        formikProps.setSubmitting(false)
        formikProps.setStatus(error)
        this.setState({ authStatus: error })
      })
    }, 1000)
}

function validateForm(values) {
  errors.identity = !values.identity ? 'Username required' : null
  errors.password = !values.password ? 'Password required' : null
  return errors
}

const LoginForm = () => (
  <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
    <Formik
      initialValues={formInitialValue}
      validate={validateForm.bind(this)}
      onSubmit={submitForm.bind(this)}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-5">
          {status && <AlertInline message={status} color="yellow" />}
          <div>
            <label htmlFor="identity" className="sr-only">
              Username
            </label>
            <div className="mt-1">
              <Field
                type="text"
                name="identity"
                placeholder="Username"
                className={'form--input' + (errors.identity && touched.identity ? ' border-red-500' : '')}
              />
              <ErrorMessage
                name="identity"
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
                className={'form--input' + (errors.password && touched.password ? ' border-red-500' : '')}
              />
              <ErrorMessage
                name="password"
                component="span"
                className="pt-1 mx-1 text-xs text-red-500"
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="button--primary">
              {isSubmitting && <img src={loadersvg} className="w-auto h-4" alt="loader" />}
              {!isSubmitting && <span>Sign in</span>}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default LoginForm
