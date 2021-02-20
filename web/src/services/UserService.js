import axios from 'axios'
import { apiUrl, authHeader } from '../utils'
export const userService = {
  getAll
}

function getAll() {
  // const requestOptions = { method: 'GET', headers: authHeader() }
  // return fetch(`${apiUrl}/users`, requestOptions).then(handleResponse)
  // return await axios.get(`${apiUrl}/users`, { headers: authHeader() }).then(handleResponse)

  axios
    .get(`${apiUrl}/users`, { headers: authHeader() })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(`Something happen: ${error}`)
    })
}
