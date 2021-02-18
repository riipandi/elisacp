import { authHeader, handleResponse } from '../utils'

export const userService = {
  getAll
}

function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() }
  return fetch(`http://localhost:2080/api/users`, requestOptions).then(handleResponse)
}
