import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://www.escapefromtarkov.com/themes/eft/images/eft_logo_promo.jpg"} />
      </div>
    );
  }
}

export default App;
