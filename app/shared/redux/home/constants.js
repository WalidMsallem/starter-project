/*
*
* Home constants
*
*/

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/HOME/'

export default {
defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
}