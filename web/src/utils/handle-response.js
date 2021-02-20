import { authenticationService } from '../services'

export function handleResponse(response) {
  if (!response.status !== 200) {
    if ([401, 403].indexOf(response.status) !== -1) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      authenticationService.logout()
      location.reload(true)
    }
  }

  return response
}
