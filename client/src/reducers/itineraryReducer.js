import { GET_ITINERARIES, GET_ITINERARY } from '../actions/types';

//Estado inicial hardcodeado. Esto debería venir de la API. 
//Lo toma el reducer como parámetro. 
const initialState = {
    itineraries: [
        { title: 'Inital title', profilePic: '', rating: '', duration: '', price: '', cityId: ''},
        { title: 'Inital title', profilePic: '', rating: '', duration: '', price: '', cityId: ''},
        { title: 'Inital title', profilePic: '', rating: '', duration: '', price: '', cityId: ''},
        { title: 'Inital title', profilePic: '', rating: '', duration: '', price: '', cityId: ''}
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
        case GET_ITINERARY:
            return {
                ...state,
                itineraries: action.payload
            }

        default:
            return state;
    }
}
