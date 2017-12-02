import { combineReducers } from 'redux'
// import InspectRoomChangeReducer from './InspectRoomChangeReducer';
import userReducer from './userReducer'
import networkReducer from './networkReducer'

const rootReducer = combineReducers({
    userStore: userReducer,
    networkStore: networkReducer,
});

export default rootReducer;
