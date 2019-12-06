import {GET_CITIES} from '../actions/types';
import {GET_CITY} from '../actions/types';

const initialState = {
  cities: [

  ],
  flag:false
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload, flag:true
      }
      case GET_CITY:
      return {
        ...state,
        cities: action.payload, flag:true
      }
      default:
        return state
  }
}