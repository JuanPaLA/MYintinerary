import { GET_ACTIVITIES, GET_ACTIVITY } from '../actions/types';

//Estado inical hardcodeado.
//Lo toma el reducer como parámetro
const initialState = {
  activities: [
    {
      title: 'initialTitle',
      pic: '',
      details: '',
      comments: '',
      itineraryId: ''
    },
    {
      title: 'initialTitle',
      pic: '',
      details: '',
      comments: '',
      itineraryId: ''
    }
  ]
};

/*Éste es el reducer en sí mismo. Toma un estado y una acción
como parámetros
*/
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload
      };
    default:
      return state;
  }
}
