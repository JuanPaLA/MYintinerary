import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';
import CarouselA from './Components/Carousel/carousel';
import Nav from './Components/Nav/nav';
import Header from './Components/Header/header';
import CentralComp from './Components/CentralComponent/centralcomp';
import HomeButt from './Components/HomeButton/home';

class App extends Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
     console.log(this.props)
  }
  render () {
    return (      
      <div>
        <Nav location = {this.props.location} />  
        <Header />
        <CentralComp />
        <CarouselA />
        <HomeButt />
      </div>  
      
  );
}
}

export default App;
