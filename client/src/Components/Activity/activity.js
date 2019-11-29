/*Importamos componentes básicos */
import React from 'react';

//Importamos elementos de redux
import { Component } from 'react';
import { connect } from 'react-redux';
import { getActivities } from '../../actions/activitiesActions';
import { getActivity } from '../../actions/activitiesActions';
import PropTypes from 'prop-types';

/*Importamos estilos */
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardText } from "mdbreact";


class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itId: ''
    };
    
  }

  async  componentDidMount() {
    // await this.props.getActivity('5dc1d63e1c9d44000005723c');
    
    let itineraryId = this.props.id;
    
    console.log(this.props.id);
    console.log(itineraryId);

    if(this.props.id){
      console.log("acá hay un valor", this.props.id) ;
      itineraryId = this.props.id; 
      console.log(itineraryId);      
      await this.props.getActivity(itineraryId);
      this.setState({
        itId: itineraryId
      })
      console.log(this.state.itId)
    }

    // await this.props.getActivity(this.state.itId);
  }

  render() {
    return (
      <div>

        <div className="container">
          <a class="btn btn-light border" data-toggle="collapse" data-target="#actividades"><p style={{color:'black'}}><small>{this.props.id}</small></p></a>
          <div id="actividades" className="collapse container">
                {this.props.activity.map((elem) => (

                  <div>
                      <MDBCardImage className="img-fluid" src={elem.pic} />
                  </div>

          ))}
        </div>
      </div>       
      </div>
    );
  }
}

Activities.propTypes = {
  getActivities: PropTypes.func.isRequired,
  getActivity: PropTypes.func.isRequired,
  activity: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  // console.log(state.activity);
  return {
    activity: state.activity.activities
  };
};

export default connect(mapStateToProps, { getActivities, getActivity })(Activities);

// export default Activities;


/*

                /* <MDBContainer>
                  <MDBCarousel>
                    <MDBCarouselItem itemdId={i}>

                      <MDBRow>
                        <MDBCol size="6">
                          <MDBCard>
                          <MDBCardImage className="img-fluid" src={elem.pic} />
                          </MDBCard>
                        </MDBCol>
                      </MDBRow>

                    </MDBCarouselItem>
                  </MDBCarousel>
                </MDBContainer> */



