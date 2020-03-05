import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
// import * as constants from 'shared/constants'
import { Layout } from 'antd'
// import { isEmpty } from 'lodash'
// import { getRoles, getUserInformations } from 'shared/utils/access-token'
// import { registerPushNotification } from 'shared/utils/onesignal'
// import { Switch } from 'react-router-dom'
import DefaultLayout from '../DefaultLayout'
import generalRoutes from './general.routes'
const { Content } = Layout

const PrivateRoutes = () => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    // if (!token) {
    // do somting
    // }

    // const userInformation = getUserInformations()
    // registerPushNotification()
    // const rolesFromToken = getRoles()
    // if (JSON.stringify(roles) !== JSON.stringify(rolesFromToken)) {
    //   setRoles(rolesFromToken)
    //   setUserInformation(userInformation)
    // }
  }, [])

  // if (isEmpty(roles)) {
  // return <>{exceptionRoutes(roles, true)}</>
  // return <Spin />
  // }
  return (
    <DefaultLayout>
      <Content className="layout-content">{generalRoutes()}</Content>
    </DefaultLayout>
  ) // loading endpoint
}

PrivateRoutes.propTypes = {}

export default PrivateRoutes
