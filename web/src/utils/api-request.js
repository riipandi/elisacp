import axios from 'axios'

// Mock API users: https://jsonplaceholder.typicode.com/users

export const apiUrl = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:2080/api'

export const ApiRequest = () => axios.create({ baseURL: `${apiUrl}` })
