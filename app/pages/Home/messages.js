/*
 * Home Messages
 *
 * This contains all the text for the Home container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.Home'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Home container!',
  },
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Home',
  },
  helmetName: {
    id: `${scope}.helmetName`,
    defaultMessage: 'description',
  },
  helmetContent: {
    id: `${scope}.helmetContent`,
    defaultMessage: 'Description of Home',
  },
})
