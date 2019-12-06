import { GET_ITINERARIES } from './types';
import { GET_ITINERARY } from './types';

/*
Esta es la acción.
Es un objeto que devuelve un objeto con un tipo y payload.
*/
export const getItineraries = () => async dispatch => {
  var datos = await fetch('http://localhost:5000/api/itineraries')
    .then(datos => datos.json())
    .catch(err => console.log(err));

  dispatch({
    type: GET_ITINERARIES,
    payload: datos
  });
};

export const getItinerary = id => async dispatch => {
 console.log(id)
  // dispatch({
  //   type: GET_ITINERARY,
  //   payload: {}
  // });
  var datos = await fetch(`http://localhost:5000/api/itineraries/${id}`)
    .then(datos => datos.json()).then((datos)=>{
      console.log("pepe")
      dispatch({
        type: GET_ITINERARY,
        payload: datos
      });
    })
    .catch(err => console.log(err));

console.log(datos);

  
};
