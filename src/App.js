import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";
import {Main} from "./components/Main";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
              <Header/>
              <Main/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
