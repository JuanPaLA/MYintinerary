import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getCities } from '../actions/citiesActions';
import PropTypes from 'prop-types';

class CitiesB extends Component {

    componentDidMount(){
        this.props.getCities();
    }
  
    static propTypes = {
    getItems: PropTypes.func.isRequired,
    
  };

  render(){
    const { cities } = this.props.city;
      return(
          <h1>Vamos de a poco</h1>
          <p>{cities}</p>
      );
  }

}

CitiesB.propTypes = {
    getCities: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    city: state.cty
});

export default connect(
    mapStateToProps, 
    {getCities}
)(CitiesB);

