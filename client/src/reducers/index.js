import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducer';
import activityReducer from './activityReducer';

export default combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
  activity: activityReducer
});