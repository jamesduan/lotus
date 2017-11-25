import { combineReducers } from 'redux'
// import InspectRoomChangeReducer from './InspectRoomChangeReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
    userStore: userReducer
});

export default rootReducer;
