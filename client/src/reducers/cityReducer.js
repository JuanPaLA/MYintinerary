import { GET_CITIES } from '../actions/types';

const initialState = {
    cities: [
        {city: 'bogotá', country: 'colombia'},
        {city: 'madrid', country: 'spain'}
    ]
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_CITIES:            
            return {
                ...state    
            }            
        default:
            return state;
    }
}