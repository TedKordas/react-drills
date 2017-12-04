import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      filterString: "",
      games: [
        "PUBG",
        "CS:GO",
        "Escape From Tarkov",
        "Hellblade: Senuas Sacrifice",
        "Rainbow 6 Siege"
      ]
    }
  }

  handleChange(filter) {
    this.setState({filterString: filter})
  }

  render() {
    let gametoDisplay = this.state.games.filter((e, i) => {
      return e.includes(this.state.filterString);
    }).map((e, i) => {
      return <h2 key = {i}>{e} </h2>
    })
  
    
    return (
      <div className="App">
        <input onChange ={ (e) => this.handleChange(e.target.value) } type = "text" />
        {gametoDisplay}
      </div>
    );
  }
}

export default App;
