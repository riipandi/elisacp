import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import PlainLayout from '../../layouts/plain'

function ResetPassword() {
  return (
    <PlainLayout>
      <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="w-auto h-20 mx-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Reset Password
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <Formik
          initialValues={{ email: '' }}
          validate={(values) => {
            const errors = {}
            if (!values.email) {
              errors.email = 'Email address required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
          <Form className="space-y-5">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="mt-1">
                  <Field type="text" name="email" placeholder="Email address"
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                    <ErrorMessage name="email" component="span" className="pt-1 mx-1 text-xs text-red-500" />
                </div>
              </div>
              <div>
                <button
                  type="submit" disabled="{isSubmitting}"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Send instruction
                </button>
              </div>
            </Form>
              )}
        </Formik>
          </div>
            <div className="mx-auto mt-8 text-sm font-medium text-center">
              <span>Remember your password?</span>
              <Link to="/" className="ml-1 text-primary-600 hover:text-primary-500">
                Sign in here
              </Link>
            </div>
        </div>
      </div>
    </PlainLayout>
  )
}

export default ResetPassword
