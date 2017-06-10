import React, { Component } from 'react';
import {Link} from 'react-router-dom'


//display assets
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 id="title">Mixology Lab</h1>
            <div className="devNav">
                <Link className="devLink" to="/">Home</Link>
                <Link className="devLink" to="/customize">Filter</Link>
                <Link className="devLink" to="/drink-menu">Drink-List</Link>
                <Link className="devLink" to="/drink/:somename">Drink-Item</Link>
            </div>
        </div>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
