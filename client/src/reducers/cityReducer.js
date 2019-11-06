import {GET_CITIES} from '../actions/types';

const initialState = {
  cities: [
    {country: '1', city: 'a'},
    {country: '2', city: 'b'},
    {country: '3', city: 'c'}
  ]
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload
      }
      default:
        return state
  }
}