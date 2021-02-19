import { apiUrl } from '../config'
import { authHeader, handleResponse } from '../utils'
export const userService = {
  getAll
}

function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() }
  return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse)
}
