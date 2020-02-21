import { combineReducers } from 'redux';
import chatReducer from "./chatReducer.js";
import profileReducer from "./profileReducer.js";
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
        router: connectRouter(history),
        chatReducer,
        profileReducer
    }
);