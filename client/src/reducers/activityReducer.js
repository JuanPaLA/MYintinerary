import { GET_ACTIVITIES, GET_ACTIVITY } from '../actions/types';

//Estado inical hardcodeado.
//Lo toma el reducer como parámetro
const initialState = {
  activities: [
    {
      title: 'Sacred Family',
      pic: 'https://cdn.getyourguide.com/img/tour_img-1533331-146.jpg',
      details: '',
      comments: '',
      itineraryId: ''
    },
    {
      title: 'The rockertone',
      pic: 'https://cdn.getyourguide.com/img/tour_img-1533331-146.jpg',
      details: '',
      comments: '',
      itineraryId: ''
    },
    {
      title: 'Batlo s House',
      pic: 'https://cdn.getyourguide.com/img/tour_img-1533331-146.jpg',
      details: '',
      comments: '',
      itineraryId: ''
    }    
  ],  
    flag: false
};

/*Éste es el reducer en sí mismo. Toma un estado y una acción
como parámetros
*/
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload, flag: true
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload, flag: true
      };
    default:
      return state;
  }
}
