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
import { MDBBtn, MDBCollapse } from "mdbreact";
import './cityItinerary.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class CityItinerary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCity: [],
            cities: [],
            itinerarios: [],
        }
    }

    
    

    componentDidMount() {
        //---Capturo id de la ciudad previamente elegida y la asigno a variable
        let cityId = this.props.match.params.id;
        console.log(cityId);

        //---Traigo los datos de la ciudad con el método getCity(ID)
        this.props.getCity(cityId);
        //---Traigo los datos de los itinerarios de la ciudad con el método getItinerary (modificado para traerlos desde city y no de un itinerario)
        this.props.getItinerary(cityId);

        this.setState({
            selectedCity: this.props.city
        })
    }
    

    render() {
        //--LA CIUDAD
        console.log(this.props.city);
        console.log(this.props.itinerary);
        const cities = this.props.city;
        console.log(JSON.stringify(cities, null, 2));
        //--SUS ITINERARIOS

        return (
            <div>
                {/* -----------Cities CARD---------- */}
                <MDBRow>
                    <MDBCol>
                        <div className="container">
                            <img src={this.props.city.urlPic} alt="thumbnail" className="img-thumbnail" />
                            <h2 className="centered">{this.props.city.city}</h2>
                        </div>
                        <h6>Availabe MYItineraries</h6>
                    </MDBCol>
                </MDBRow>

                {/* -----------Itineraries CARD---------- */}

                
                {this.props.itinerary.map(elem => (
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <i class="fas fa-user" size="4x" ></i>
                            </div>
                            <div className="col-9">
                                <h7>{elem.title}</h7>
                                <div className="row">
                                    <p><small>Likes: {elem.rating}</small></p>
                                    <p><small>|  Hourse: {elem.duration}</small></p>
                                    <p><small>|  Price: ${elem.price}</small></p>
                                </div>
                                {this.props.itinerary.map(hash => (
                                    <div className="row">
                                        <p><small>{hash.hashtag}</small></p>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                            
                        <div>
                        {/* <button onClick={this.handleCollapse}>
                            {this.state.isOpen ? 'Ver más' : 'OFF'}
                        </button> */}



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
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        city: state.city.cities,
        itinerary: state.itinerary.itineraries
    }
}

export default connect(mapStateToProps, { getCity, getItinerary })(CityItinerary);