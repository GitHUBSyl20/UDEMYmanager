import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'

export default combineReducers({
    //the auth piece of state is produced by the AuthReducer
    auth: AuthReducer
})
