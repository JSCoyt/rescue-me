import React, { Component } from "react";

import './styles/App.css';

class App extends Component {
  showMenu = e => {
    e.preventDefault();
    this.props.history.push("/menu");
  };
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}
export default App;
