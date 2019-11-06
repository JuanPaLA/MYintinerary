import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';
import CarouselA from './Components/Carousel/carousel';
import Nav from './Components/Nav/nav';
import Header from './Components/Header/header';
import CentralComp from './Components/CentralComponent/centralcomp';
import HomeButt from './Components/HomeButton/home';

class App extends Component {
  render () {
    return (      
      <div>
        <Nav />  
        <Header />
        <CentralComp />
        <CarouselA />
        <HomeButt />
      </div>  
      
  );
}
}

export default App;
