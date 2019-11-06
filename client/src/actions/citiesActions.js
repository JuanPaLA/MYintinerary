import {GET_CITIES} from './types';

export const getCities =  () => async (dispatch) => {

  var datos = await fetch('http://localhost:5000/api/cities')
  .then(datos => datos.json())

  dispatch(
    {
      type: GET_CITIES,
      payload: datos
  }
  ) 
}