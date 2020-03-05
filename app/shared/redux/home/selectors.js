import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.home || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(
    selectHomeDomain,
    substate => substate
  )

const selectData = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.data,
  )

const selectLocal = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.local,
  )

export default makeSelectHome;
export { selectData, selectLocal, selectHomeDomain };
