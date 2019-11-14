import React, {Component } from 'react'
import Header from '../Header/header';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';

 import { connect } from 'react-redux';
 import { getItineraries } from '../../actions/itinerariesActions';        
 import PropTypes from 'prop-types';

class Itineraries extends Component {
    constructor(props){
        super(props)
        this.state = {
            itineraryFilter: []
        }
    }

    componentDidMount(){
        this.props.getItineraries();
        console.log("Probando itineraries");
        console.log(this.props.itinerary);
        this.setState({
            itineraryFilter: this.props.itinerary
        })
    }


    render(){
        const itineraries = this.props.itinerary;
        console.log(itineraries);
        return(
            <div>
                <Nav />
                <Header />
                <h3>This is a list of itineraries</h3>
                {/* <ul>
                    {itineraries.map((elem, i) => {
                        return (
                        <li key={i}>{elem.title}</li>
                        )
                    })}
                </ul>          */}
                <HomeButt/>
            </div>            
        );
    }
}

Itineraries.propTypes = {
    getItineraries: PropTypes.func.isRequired,
    itinerary: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    itinerary: state.itinerary.Itineraries
})

export default connect(mapStateToProps, {getItineraries}) (Itineraries);
