import React from 'react'
import Header from '../Header/header';
import Nav from '../Nav/nav';
import HomeButt from '../HomeButton/home';

class Cities extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    var datos = await fetch('http://localhost:5000/api/cities')
      .then(datos => datos.json())
    this.setState({
      data: datos
    })
    console.log("returning data => ", this.state.data);
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <ul>
          {this.state.data.map((city) => {
            return (
              <li key={city._id}>{city.city}</li>
            )
          })}
        </ul>
          <HomeButt />
      </div>
    )
  }
}


export default Cities; 