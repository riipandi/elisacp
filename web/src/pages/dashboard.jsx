import React, { Component } from 'react'
import { Menu, Transition } from '@headlessui/react'
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
            {/* {users && (
            <ul>
              {users.map((user) => (
                <li key="{user.ID}">
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          )} */}

      {/* Page title & actions */}
      <div className="px-4 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Hi {currentUser.name}!
          </h1>
        </div>
        <div className="flex mt-4 sm:mt-0 sm:ml-4">
          <button type="button" className="inline-flex items-center order-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:order-0 sm:ml-0">
            Share
          </button>
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 order-0 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:order-1 sm:ml-3">
            Create
          </button>
        </div>
      </div>
      {/* Pinned projects */}
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-xs font-medium tracking-wide text-gray-500 uppercase">Pinned Projects</h2>
        <ul className="grid grid-cols-1 gap-4 mt-3 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <li className="relative flex col-span-1 rounded-md shadow-sm">
            <div className="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white bg-pink-600 rounded-l-md">
              GA
            </div>
            <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                  GraphQL API
                </a>
                <p className="text-gray-500">12 Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
    <Menu>
      {({ open }) => (
        <>
                <Menu.Button id="pinned-project-options-menu-0" aria-haspopup="true" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <span className="sr-only">Open options</span>
                  {/* Heroicon name: solid/dots-vertical */}
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </Menu.Button>
                {/* Dropdown panel, show/hide based on dropdown state. */}
                    <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
                <Menu.Items static className="absolute z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-10 top-3 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="pinned-project-options-menu-0">
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View</a>
                  </div>
                  <div className="py-1" role="none">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Removed from pinned</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Share</a>
                  </div>
                </Menu.Items>
                </Transition>
        </>
      )}
    </Menu>
              </div>
            </div>
          </li>
          {/* More items... */}
        </ul>
      </div>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-xs font-medium tracking-wide text-gray-500 uppercase">Projects</h2>
        </div>
        <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
          <li>
            <a href="#" className="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6">
              <span className="flex items-center space-x-3 truncate">
                <span className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600" aria-hidden="true" />
                <span className="text-sm font-medium leading-6 truncate">
                  GraphQL API
                  <span className="font-normal text-gray-500 truncate">in Engineering</span>
                </span>
              </span>
              {/* Heroicon name: solid/chevron-right */}
              <svg className="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
          {/* More items... */}
        </ul>
      </div>
      {/* Projects table (small breakpoint and up) */}
      <div className="hidden mt-8 sm:block">
        <div className="inline-block min-w-full align-middle border-b border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  <span className="lg:pl-2">Project</span>
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Members
                </th>
                <th className="hidden px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 md:table-cell bg-gray-50">
                  Last updated
                </th>
                <th className="py-3 pr-6 text-xs font-medium tracking-wider text-right text-gray-500 uppercase border-b border-gray-200 bg-gray-50" />
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              <tr>
                <td className="w-full px-6 py-3 text-sm font-medium text-gray-900 max-w-0 whitespace-nowrap">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true" />
                    <a href="#" className="truncate hover:text-gray-600">
                      <span>
                        GraphQL API
                        <span className="font-normal text-gray-500">in Engineering</span>
                      </span>
                    </a>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      <img className="w-6 h-6 rounded-full max-w-none ring-2 ring-white" src="https://unavatar.now.sh/github/riipandi" alt="user avatar" />
                      <img className="w-6 h-6 rounded-full max-w-none ring-2 ring-white" src="https://unavatar.now.sh/github/riipandi" alt="user avatar" />
                      <img className="w-6 h-6 rounded-full max-w-none ring-2 ring-white" src="https://unavatar.now.sh/github/riipandi" alt="user avatar" />
                      <img className="w-6 h-6 rounded-full max-w-none ring-2 ring-white" src="https://unavatar.now.sh/github/riipandi" alt="user avatar" />
                    </div>
                    <span className="flex-shrink-0 text-xs font-medium leading-5">+8</span>
                  </div>
                </td>
                <td className="hidden px-6 py-3 text-sm text-right text-gray-500 md:table-cell whitespace-nowrap">
                  March 17, 2020
                </td>
                <td className="pr-6">
                  <div className="relative flex items-center justify-end">
                      <Menu>
      {({ open }) => (
        <>
                    <Menu.Button id="project-options-menu-0" aria-haspopup="true" type="button" className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      <span className="sr-only">Open options</span>
                      {/* Heroicon name: solid/dots-vertical */}
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </Menu.Button>
                    {/* Dropdown panel, show/hide based on dropdown state. */}
          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
                    <Menu.Items static className="absolute top-0 z-10 w-48 mx-3 mt-1 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg right-7 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="project-options-menu-0">
                      <div className="py-1" role="none">
                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          {/* Heroicon name: solid/pencil-alt="" */}
                          <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                          </svg>
                          Edit
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          {/* Heroicon name: solid/duplicate */}
                          <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                          </svg>
                          Duplicate
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          {/* Heroicon name: solid/user-add */}
                          <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                          </svg>
                          Share
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          {/* Heroicon name: solid/trash */}
                          <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Delete
                        </a>
                      </div>
                    </Menu.Items>
                    </Transition>
                    </>
                          )}
    </Menu>
                  </div>
                </td>
              </tr>
              {/* More items... */}
            </tbody>
          </table>
        </div>
      </div>
        </DefaultLayout>
      </>
    )
  }
}

export default Dashboard
