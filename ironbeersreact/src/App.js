import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes/Routes";
import Navbar from "./Components/Navbar";
import dotenv from "dotenv";


class App extends Component {
  render() {

  return (
    <div className="App">
      <Navbar />
      <div className="Wrapper">
      <Routes />
      </div>
    </div>
  );
}
}

export default App;
