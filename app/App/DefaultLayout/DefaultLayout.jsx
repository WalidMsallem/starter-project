/**
 *
 * Layout
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './default-layout.scss'

/**
 * App layout
 */
const DefaultLayout = ({ children }) => <div className="layout">{children}</div>

DefaultLayout.propTypes = {
  /**
   *
   */
  children: PropTypes.any.isRequired,
}

export default memo(DefaultLayout)
