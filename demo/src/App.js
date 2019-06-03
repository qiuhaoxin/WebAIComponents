import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import SlideNav from '../../src/components/SlideNav';
import {SlideNav} from '../../dist/main.min.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div>test</div>
         <SlideNav />
      </div>
    );
  }
}

export default App;
