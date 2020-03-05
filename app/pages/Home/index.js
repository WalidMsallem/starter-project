/**
 *
 * Home
 *
 */

import React, { memo } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
import injectReducer from 'utils/injectReducer'
import makeSelectHome, {
  selectData,
  selectLocal,
} from '../../shared/redux/home/selectors'
import reducer from '../../shared/redux/home/reducer'

import actions from '../../shared/redux/home/actions'

import saga from '../../shared/redux/home/saga'

import Home from './Home'

const HomeIndex = props => <Home {...props} />

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  data: selectData(),
  local: selectLocal(),
})

const mapDispatchToProps = {
  ...actions,
}

const withSaga = injectSaga({ key: 'home', saga, mode: DAEMON })

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  injectReducer({ key: 'home', reducer }),
  withConnect,
  memo,
  withSaga,
)(HomeIndex)
