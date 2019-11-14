//importsamos componentes básicos
import React from 'react'
import Header from '../Header/header';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';

//Importamos elementos de redux
import { Component } from 'react';
import { connect } from 'react-redux';
import { getCities } from '../../actions/citiesActions';        
import PropTypes from 'prop-types';

//Importamos estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBRow, MDBCol} from "mdbreact";

class Cities extends Component {
  constructor(props){
    super(props)
    this.state = {
      cityFilter: [],
    }
  }

 componentDidMount() {
      this.props.getCities();
      console.log("Probando");
      console.log(this.props.city);
      this.setState({ 
        cityFilter: this.props.city 
      })
  }

  filterCities = (e) => {
    let filteredCities = this.props.city;
    filteredCities = filteredCities.filter((cities) => {
        let cityName = cities.city.toLowerCase() + cities.country.toLowerCase()
        return cityName.indexOf(
            e.target.value.toLowerCase()) !== -1
    })
    this.setState({
        cityFilter: filteredCities
    })
}


  render() {
    const  cities  = this.props.city;
    return (
      <div>
        <Nav />
        <Header />
        <h1>This is a list of cities</h1>      
        
        
          {cities.map((city, i) => {
            return (
              <MDBRow>
              <MDBCol>
                <img key={i} src={city.urlPic} alt="thumbnail" className="img-thumbnail" />
                <p className="text-center"><big>{city.city}</big></p>
            </MDBCol>
            </MDBRow>
            )
          })}
        

        {/* <ul>
          {cities.map((city, i) => {
            return (
              <li key={i}>{city.city}</li>
            )
          })}
        </ul>
           */}
        <label htmlFor=""><strong>Filter by City</strong></label>
       <input onChange={this.filterCities}></input>
        <ul id="list">
            {this.state.cityFilter.map((elem, i) => { return <li className="card bg-dark text-white" key={i}>{elem.city} | {elem.country}</li> })}
        </ul>
        <div id="footer">
          <HomeButt />
        </div>
          
      </div>
    )
  }
}

Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  city: PropTypes.array.isRequired
}


const mapStateToProps = (state) => ({
  city: state.city.cities
})

export default connect(mapStateToProps, {getCities})(Cities); 