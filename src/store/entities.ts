import { combineReducers } from "redux";

import detailsReducer from './details';
import profileRducer from './profile';

export default combineReducers({
    details: detailsReducer,
    profiles: profileRducer,
});