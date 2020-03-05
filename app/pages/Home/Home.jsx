/**
 *
 * Home
 *
 */

import React from 'react'

import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Helmet } from 'react-helmet'

import messages from './messages'

import './home.scss'

const Home = ({ intl, data, local }) => {
  const { loading, errors } = local

  const helmetMessages = {
    helmetTitle: intl.formatMessage({
      ...messages.helmetTitle,
    }),
    helmetName: intl.formatMessage({
      ...messages.helmetName,
    }),
    helmetContent: intl.formatMessage({
      ...messages.helmetContent,
    }),
  }

  return (
    <div className="home">
      <Helmet>
        <title>{helmetMessages.helmetTitle}</title>
        <meta
          name={helmetMessages.helmetName}
          content={helmetMessages.helmetContent}
        />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  )
}

Home.propTypes = {
  /**
* The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string
comparison, number formatting, and date and time formatting.
*/
  intl: intlShape.isRequired,
  data: PropTypes.object.isRequired,
  local: PropTypes.object.isRequired,
}

export default injectIntl(Home)
