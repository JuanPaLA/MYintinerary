import React from 'react'
import Header from '../Header/header';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';
import { Component } from 'react';

// import { connect } from 'react-redux';
// import { getCities } from '../../actions/citiesActions';        
// import PropTypes from 'prop-types';

class Itineraries extends Component {
    render(){
        return(
            <div>
                <Nav />
                <Header />
                <h3>This is a list of itineraries</h3>
                <HomeButt/>
            </div>            
        );
    }
}

export default Itineraries;
//  componentDidMount() {
//       this.props.getCities();

//   }

//   render() {
//     const  cities  = this.props.city;
//     return (
//       <div>
//         <Nav />
//         <Header />
        
//         <ul>
//           {cities.map((city, i) => {
//             return (
//               <li key={i}>{city.city}</li>
//             )
//           })}
//         </ul>
//           <HomeButt />
//       </div>
//     )
//   }
// }

// Cities.propTypes = {
//   getCities: PropTypes.func.isRequired,
//   city: PropTypes.array.isRequired
// }


// const mapStateToProps = (state) => ({
//   city: state.city.cities
// })

// export default connect(mapStateToProps, {getCities})(Cities); 