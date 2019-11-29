//importsamos componentes básicos
import React from 'react';
// import { Link } from 'react-router-dom';
import HomeButt from '../HomeButton/home';
import Activities from '../Activity/activity';

import { Link } from 'react-router-dom';

//Importamos elementos de redux
import { Component } from 'react';
import { connect } from 'react-redux';
import { getCity } from '../../actions/citiesActions';
import { getItinerary } from '../../actions/itinerariesActions';
import PropTypes from 'prop-types';

//Importamos estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBRow } from 'mdbreact';
import './cityItinerary.css';

class CityItinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: [],
      cities: [],
      itinerarios: [],
      open: false,
      id: '',
      code: '5dc1d63e1c9d44000005723c'
    };
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(e){
    this.setState(prevState => ({
      open: !prevState.open
    

    }))
    
  }

  async componentDidMount() {
    //---Capturo id de la ciudad previamente elegida y la asigno a variable
    let cityId = this.props.match.params.id;

    //---Traigo los datos de la ciudad con el método getCity(ID)
    await this.props.getCity(cityId);
    //---Traigo los datos de los itinerarios de la ciudad con el método getItinerary (modificado para traerlos desde city y no de un itinerario)
    await this.props.getItinerary(cityId);
    
  }

  render() {
    
    return (
      <div>
        {/* -----------Cities CARD---------- */}
        <div className="contaniner border p-2">

        <MDBRow>
          <MDBCol>
            <div className='container'>
              <img
                src={this.props.city.urlPic}
                alt='thumbnail'
                className='img-thumbnail'
              />
              <h2 className='centered'>{this.props.city.city}</h2>
            </div>
            <h6>Availabe MYItineraries</h6>
          </MDBCol>
        </MDBRow>

        </div>
        

        {/* -----------Itineraries CARD---------- */}

        {this.props.itinerary.map((elem, i) => (
          <div className='container-fluid border my-1'>
            <div className='row'>
              <div className='col-3'>
                <i class='fas fa-user' size='4x'></i>
              </div>
              <div className='col-9'>
                <h6 style={{}}>{elem.title}</h6>
                <div className='row' style={{ marginTop:'-2vh'}}>
                  <p>
                    <small>Likes: {elem.rating}</small>
                  </p>
                  <p>
                    <small>  Hours: {elem.duration}</small>
                  </p>
                  <p>
                    <small>  Price: ${elem.price}</small>
                  </p>
                  
                </div>
                {this.props.itinerary.map(hash => {
                  return (
                    <div className='row'>
                      {hash.hashtag ? (
                        hash.hashtag.map((elem, i) => (
                          <p style={{marginRight:'10px', marginTop:'-4vh'}}>
                            <small> &nbsp; {elem}</small>
                          </p>
                        ))
                      ) : (
                        <div> 

                        </div>
                      )}
                    </div>
                  );
                })}

                {/* ------- collapsable ------- */}
                {/* <button onClick={this.handleClick}>
                    {this.state.open ? 'ON' : 'OFF'}
                </button> */}
             
                  
              </div>
              <div className="container px-200" >
                  <Activities id={this.props.itinerary[i]._id}/>        
                </div>
            </div>
          </div>
        ))}
        
        <HomeButt />
      </div>
    );
  }
}

CityItinerary.propTypes = {
  getCity: PropTypes.func.isRequired,
  city: PropTypes.array.isRequired,

  getItinerary: PropTypes.func.isRequired,
  itinerary: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    city: state.city.cities,
    itinerary: state.itinerary.itineraries
  };
};

export default connect(mapStateToProps, { getCity, getItinerary })(
  CityItinerary
);
