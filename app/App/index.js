/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { compose } from 'redux'
// import { connect } from 'react-redux'
// import injectSaga from 'utils/injectSaga'
// import { DAEMON } from 'utils/constants'
// import { createStructuredSelector } from 'reselect'

// import injectReducer from 'utils/injectReducer'
 
 

// import PrivateRoutes from './Routes/PrivateRoutes'

import { setAccessTokenIfDefined } from '../shared/utils/access-token'
import 'easymde/dist/easymde.min.css'
import './global-styles.scss'

function App( ) {
  useEffect(() => {
    // getSettings()
  }, [])
  setAccessTokenIfDefined()

  return (
    <div>
      <Switch>
        {/* <Route
          path="/"
          render={() => (
            <PrivateRoutes   />
          )}
        /> */}
      </Switch>
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({ })

// const mapDispatchToProps = { } 

// const withSaga = injectSaga({ key: 'profile', saga, mode: DAEMON })
 

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )

export default compose(
  // injectReducer({ key: 'profile', reducer }),
  // withConnect,
  memo,
  // withSaga,
)(App)
