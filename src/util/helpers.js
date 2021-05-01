import axios from 'axios'

export function leadingSlash (str) {
  return str.startsWith('/') ? str : '/' + str
}

export function trailingSlash (str) {
  return str.endsWith('/') ? str : str + '/'
}

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function drawWidth () {
  // I need widht of th screm
  console.log(screen.width)
  // scren 100
  // w      x
  // really ?  1366- but change when i zoom-in the screma
}
export function pixeltoPercer (w) {
  return w * 100 / screen.width
}
export function setAuthorization (token) {
  axios.defaults.headers.common.Authorization = 'Token ' + token
  axios.defaults.xsrfCookieName = 'csrftoken'
  axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
}

export function getLocalUserHelper () {
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  return JSON.parse(userStr)
}
