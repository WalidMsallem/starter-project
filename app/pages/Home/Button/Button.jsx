/**
 *
 * Button
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import './button.scss'

function Button() {
  return (
    <div className="button">
      <FormattedMessage {...messages.header} />
    </div>
  )
}

Button.propTypes = {}

export default memo(Button)
