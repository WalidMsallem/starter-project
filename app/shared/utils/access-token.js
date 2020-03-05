import queryString from 'query-string'
import { isEmpty } from 'lodash'
import { decodeToken } from './decode-header'
import { setUrlPath, getCurrentQueryStringParameter } from './url.helper'

export const setAccessTokenIfDefined = () => {
  const parsed = queryString.parse(window.location.search)
  if (!isEmpty(parsed.access_token)) {
    localStorage.setItem('token', parsed.access_token)
    const redirectUrl = getCurrentQueryStringParameter('redirectUrl')
    if (redirectUrl === null || redirectUrl === undefined) {
      window.location = window.location.origin
    } else window.location = setUrlPath(window.location.href, '/')
    return true
  }
  return false
}
export const getRoles = () => {
  const token = localStorage.getItem('token')
  const data = decodeToken(token)
  //somethning to do
  return []
}
export const getUserInformations = () => {
  try {
    const token = localStorage.getItem('token')
    const data = decodeToken(token)
    //somethning to do

    const userInformation = {}
    return userInformation
  } catch (error) {
    return {
      userName: 'wily',
      firstName: 'walid',
      familyName: 'Msallem',
      email: 'walid@test.co',
    }
  }
}

export const hasToken = () => {
  const token = localStorage.getItem('token')
  if (!isEmpty(token)) {
    return true
  }
  return false
}
