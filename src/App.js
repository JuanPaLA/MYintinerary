import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <header>
       
      </header>
      <div id="motto">
        <h5>Find your perfect trip, designed by insiders who knows and love their cities</h5>
      </div>
      <div>
        <a href="#"> <img id="centerLogo" src="./circled-right-2.png" alt="circled-right"/></a>
      </div>
      <div>
        <p><strong>Whant to build your own MIntinerarys?  </strong></p>
      </div>
      <nav>
        <a href="#">Login</a> <a href="#">Create account</a>
      </nav>
      <Footer />
    </div>
  );
}



export default App;
