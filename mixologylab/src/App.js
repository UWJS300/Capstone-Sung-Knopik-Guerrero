import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


//display assets
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
      super()
      this.resetAppToHomePage = this.resetAppToHomePage.bind(this)
  }

    resetAppToHomePage(e){
        e.preventDefault()
        this.props.resetApp()
        this.props.history.push("/")
    }

    componentDidMount(){
        document.getElementById("title").addEventListener("click", this.resetAppToHomePage)
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div id="title">Mixology Lab</div>
            {/* Developer links
            <div className="devNav">
                <Link className="devLink" to="/">Home</Link>
                <Link className="devLink" to="/customize">Filter</Link>
                <Link className="devLink" to="/drink-menu">Drink-List</Link>
                <Link className="devLink" to="/drink/:somename">Drink-Item</Link>
            </div>*/}
        </div>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
