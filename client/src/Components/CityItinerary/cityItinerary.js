//importsamos componentes básicos
import React from 'react'
import { Link } from 'react-router-dom';
import HomeButt from '../HomeButton/home';

//Importamos elementos de redux
import { Component } from 'react';
import { connect } from 'react-redux';
import { getCity } from '../../actions/citiesActions';   
import { getItinerary } from '../../actions/itinerariesActions';        
import PropTypes from 'prop-types';

//Importamos estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBRow, MDBContainer, MDBCard, MDBCardUp, MDBCardBody, MDBAvatar, MDBRotatingCard, MDBIcon } from "mdbreact";
import './cityItinerary.css';

class CityItinerary extends Component {
constructor(props){
    super(props)
    this.state = {
        selectedCity: [],
        cities: [],
        itinerarios: []
    }
}

componentDidMount(){
    //---Capturo id de la ciudad previamente elegida y la asigno a variable
    let cityId = this.props.match.params.id; 
    //---Traigo los datos de la ciudad con el método getCity(ID)
    this.props.getCity(cityId);

    //---Capturo id de los itinerarios de la ciudad y los asigno a variable
    let itineraryId = this.props.match.params.itinerariesId;
    this.props.getItinerary(itineraryId);
    console.log(itineraryId);
    

    this.setState({
        selectedCity: this.props.city,
        itinerarios: this.props.itinerary
    })

    console.log("PROBANDO DESDE ESTADO");
    console.log(this.state.itinerarios);    
}

    render(){
        //--LA CIUDAD
        const  cities  = this.props.city; 
        console.log(JSON.stringify(cities, null, 2));
        //--SUS ITINERARIOS
        const itinerarios = this.props.itinerary;
        console.log(itinerarios);

        const aux = JSON.stringify(itinerarios);
        
        this.state.itinerarios = aux;
        console.log(this.state.itinerarios);

    return (
        <div>

        {/* -----------Cities CARD---------- */}

        <MDBRow>
          <MDBCol>
              <div className="container">
                <img src={cities.urlPic} alt="thumbnail" className="img-thumbnail"/>
                <h2 className="centered">{cities.city}</h2>
              </div>
              <h6>Availabe MYItineraries</h6>
          </MDBCol>
        </MDBRow>

        <hr></hr>

        {/* -----------Itineraries CARD---------- */}   
        <MDBContainer className="mdbcarcont">
        <MDBRow>
            
            <MDBCol size="3">
                <MDBRow size="9">
                    <i class="fas fa-user" size="4x" ></i>
                </MDBRow>
                
                <MDBRow size="3">
                    <p className="title"><small>Name from user</small></p>
                </MDBRow>

            </MDBCol>
            
            <MDBCol size="9">
                <MDBRow>
                    <h7 className="title">{itinerarios.title}</h7>
                </MDBRow>
                <MDBRow>
                    <p className="title"><small>Likes: {itinerarios.rating} Time: {itinerarios.duration} Price: $ {itinerarios.price} </small></p>
                </MDBRow>
                <MDBRow>
                    <p className="title"><small>#{itinerarios.hashtag}</small></p>
                </MDBRow>

           
                
                <MDBRow>
                <div>
                {Object.keys((this.state.itinerarios)).map(demo => {
                    return(
                                <p key={demo} className="title">{this.state.itinerarios[demo]}    </p>
                             
                    )
                
                })}
 
                </div>
                               </MDBRow>
                
                    

            </MDBCol>

            
        </MDBRow>
        </MDBContainer>
        
        
        
              
          

        <hr></hr>

        {/* -----------Link & Footer CARD---------- */}   


        <Link to ="/cities">
            <p>Choose another city</p>
        </Link>
        
        <HomeButt/>        
        </div>
    );
}
}

CityItinerary.propTypes = {
    getCity: PropTypes.func.isRequired,
    city: PropTypes.array.isRequired,

    getItinerary: PropTypes.func.isRequired,
    itinerary: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    city:state.city.cities,
    itinerary: state.itinerary.itineraries
})

export default connect (mapStateToProps, {getCity, getItinerary}) (CityItinerary);