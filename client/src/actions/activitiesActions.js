import { GET_ACTIVITIES } from './types';
import { GET_ACTIVITY } from './types';

/*
Esta es la acción.
Es un objeto que devuelve un objeto con un tipo y payload.
*/
export const getActivities = () => async dispatch => {
  var datos = await fetch('http://localhost:5000/api/activities').then(datos =>
    datos.json()
  );
  console.log('Pronando activity get');
  console.log(datos).catch(err => console.log(err));

  dispatch({
    type: GET_ACTIVITIES,
    payload: datos
  });
};

export const getActivity = id => async dispatch => {
  var datos = await fetch(
    `http://localhost:5000/api/activities/itinerary/${id}`
  )
    .then(datos => datos.json())
    .catch(err => console.log(err));

  dispatch({
    type: GET_ACTIVITY,
    payload: datos
  });
};
