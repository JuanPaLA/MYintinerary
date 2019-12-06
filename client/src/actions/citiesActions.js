import { GET_CITIES } from './types';
import { GET_CITY } from './types';

/*
Esta es la acción.
Es un objeto que devuelve un objeto con un tipo y payload.
*/
export const getCities = () => async dispatch => {
  var datos = await fetch('http://localhost:5000/api/cities')
    .then(datos => datos.json())
    .catch(err => console.log(err));

  dispatch({
    type: GET_CITIES,
    payload: datos
  });
};

export const getCity = id => async dispatch => {
  var datos = await fetch(`http://localhost:5000/api/city/${id}`)
    .then(datos => datos.json())
    .catch(err => console.log(err));
  // console.log(datos);

  dispatch({
    type: GET_CITY,
    payload: datos
  });
};
