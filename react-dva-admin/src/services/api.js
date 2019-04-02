import http from '../utils/request'

export function login (data) {
  return http({
    url: '/login',
    method: 'POST',
    data
  })
}

export function signin (data) {
  return http({
    url: '/signin',
    method: 'POST',
    data
  })
}