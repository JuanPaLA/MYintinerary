/*Importamos componentes básicos */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';

//Importamos elementos de redux
import { Component } from 'react';
import { connect } from 'react-redux';
// import { getActivity } from '../../actions/activitiesActions';
import { getActivities } from '../../actions/activitiesActions';
import { getItinerary } from '../../actions/itinerariesActions';
import PropTypes from 'prop-types';

/*Importamos estilos */
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBRow } from 'mdbreact';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActivity: []
    };
  }

  componentDidMount() {
    this.props.getActivities();
    console.log('--------probando activities--------');
    console.log(this.props.activities);
  }

  render() {
    return (
      <div>
        <ul>
          <li>something</li>
        </ul>
      </div>
    );
  }
}

Activities.propTypes = {
  getActivities: PropTypes.func.isRequired,
  activity: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    activity: state.activity.activities
  };
};

export default connect(mapStateToProps, { getActivities })(Activities);
