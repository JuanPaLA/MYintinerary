/*Importamos componentes básicos */
import React from 'react';

//Importamos elementos de redux
import axios from "axios"
import { Component } from 'react';

/*Importamos estilos */
import '../CityItinerary/cityItinerary.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBCard} from "mdbreact";


class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag:false,
      itId: props.id,
      inithialActivity:[]
    };
    
  }

  async  componentDidMount() {
    // await this.props.getActivity(this.props.id);
    axios.get(`http://localhost:5000/api/activities/itinerary/${this.state.itId}`).then((data)=>{
      this.setState({
        inithialActivity:data.data,
        flag:true
      })
    })
    
    
  }

  render() {
    
    return (
      
        <div className="container">
          <a className="btn btn-outline-info" data-toggle="collapse" data-target={"#actividades"}><p style={{color:'black'}}><small>{this.state.itId}</small></p></a>
          <div id="actividades" className="collapse container">
                {this.state.flag ?
                this.state.inithialActivity.map((elem, index) => (
                <div className="row">
                  <MDBCol size="4">
                    
                    <MDBCard>
                        <img className="img-thumbnail" src={elem.pic} />
                        <h6 className="centered" >{elem.title}</h6>
                    </MDBCard>

                  </MDBCol>                    
                </div> 
          )):<p>Pepe</p>}
         
      </div>
      </div>
    );
  }
}

// id={`activity${i}`

// Activities.propTypes = {
//   getActivities: PropTypes.func.isRequired,
//   getActivity: PropTypes.func.isRequired,
//   activity: PropTypes.array.isRequired,
//   flag: PropTypes.bool.isRequired
// };

// const mapStateToProps = state => {
//   // console.log(state.activity);
//   return {
//     activity: state.activity.activities,
//     flag: state.activity.flag
//   };
// };

export default Activities;
// connect(mapStateToProps, { getActivities, getActivity })