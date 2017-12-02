import * as types from '../types/networkTypes'

const initialState = {
  networkStatus: true
}

export default function networkReducer(state=initialState, action) {
  switch (action.type) {
    case types.CHECK_NETWORK_STATUS:
      // console.log(action);
      return {
        networkStatus: action.networkInfo.status
      }
    default:
      return state
  }
}
