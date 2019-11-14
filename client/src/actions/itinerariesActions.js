import { GET_ITINERARIES } from './types';

/*
Esta es la acción.
Es un objeto que devuelve un objeto con un tipo y payload.
*/
export const getItineraries = () => async (dispatch) => {
    var datos = await fetch('http://localhost:5000/api/itineraries')
    .then(datos => datos.json()).catch(err => console.log(err))

    dispatch(
        {
            type: GET_ITINERARIES,
            payload: datos
        }
    )
}