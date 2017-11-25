import * as types from '../types/userTypes'

const initialState = {
}

export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
      }
      break;
    default:
      return state
  }
}
