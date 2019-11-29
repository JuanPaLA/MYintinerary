import { GET_ACTIVITIES, GET_ACTIVITY } from '../actions/types';

//Estado inical hardcodeado.
//Lo toma el reducer como parámetro
const initialState = {
  activities: [
    {
      title: 'Sacred Family',
      pic: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjf1KihvpDmAhXMH7kGHVzeBFYQjRx6BAgBEAQ&url=https%3A%2F%2Ftravel.usnews.com%2FBarcelona_Spain%2FThings_To_Do%2FChurch_of_the_Sacred_Family_Templo_Expiatorio_de_la_Sagrada_Familia_26915%2F&psig=AOvVaw3pFnrdbHof2FDuIaUUEhCC&ust=1575153467279274',
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
