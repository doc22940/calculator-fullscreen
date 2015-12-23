import { createAction } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const actionTypes = {
  KEY_DOWN: 'KEY_DOWN',
  KEY_PRESS: 'KEY_PRESS'
}

// ------------------------------------
// Actions
// ------------------------------------
const handleKeyDown = createAction(actionTypes.KEY_DOWN)
const handleKeyPress = createAction(actionTypes.KEY_PRESS)

export const actions = {
  handleKeyDown,
  handleKeyPress
}

// ------------------------------------
// Reducer
// ------------------------------------

// No reducer for this module.
// The above action is handled internally in 'redux/middlewares/handleKeyEvent'.
