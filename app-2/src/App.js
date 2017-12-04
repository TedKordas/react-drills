import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      games: [
        "PUBG",
        "CS:GO",
        "Escape From Tarkov",
        "Hellblade: Senuas Sacrifice",
        "Rainbow 6 Siege"
      ]
    }
  }

  render() {
    let gamesToShow = this.state.games.map((e, i) => {
      return(
        <h2 key={i}>{e}</h2>
      )
    })

    return (
      <div className="App">
        {gamesToShow}
      </div>
    );
  }
}

export default App;
