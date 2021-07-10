import {GET_CITIES} from '../actions/types';
import {GET_CITY} from '../actions/types';

const initialState = {
  cities: [
    {country: '1', city: 'a', urlPic: '', itenerariesId: []}
  ]
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload
      }
      case GET_CITY:
      return {
        ...state,
        cities: action.payload
      }
      default:
        return state
  }
}