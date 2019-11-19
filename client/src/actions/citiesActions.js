import {GET_CITIES} from './types';
import {GET_CITY} from './types';

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

export const getCity = (id) => async (dispatch) => {
  var datos = await fetch(`http://localhost:5000/api/cities/${id}`) 
  .then(datos => datos.json()).catch(err => console.log(err))

  dispatch(
    {
      type: GET_CITY,
      payload: datos
    }
  )
} 
