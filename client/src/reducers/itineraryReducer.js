import { GET_ITINERARIES } from '../actions/types';

//Estado inicial hardcodeado. Esto debería venir de la API. 
//Lo toma el reducer como parámetro. 
const initialState = {
    itineraries: [
        { title: 'Red Zone', profilePic: '', rating: '', duration: '', price: ''},
        { title: 'The fifth avenue', profilePic: '', rating: '', duration: '', price: ''},
        { title: 'La Rambla', profilePic: '', rating: '', duration: '', price: ''},
        { title: 'Paseo de la Plaza', profilePic: '', rating: '', duration: '', price: ''}
    ]
}

// Éste es el reducer en sí mismo. Toma un estado y una acción c
// como parámetrso para retornar uno nuevo. 
export default function(state = initialState, action){
    switch (action.type) {
        case GET_ITINERARIES:
            return {
                ...state,
                itineraries: action.payload
            }                
        default:
            return state;
    }
}