
import * as types from '../types/networkTypes'

export function commitNetworkStatus (status) {
  return {
    type: types.CHECK_NETWORK_STATUS,
    networkInfo: {
      status: status
    }
  }
}
