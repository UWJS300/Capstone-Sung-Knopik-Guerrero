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
        this.props.history.push("/")
        this.props.resetApp()
    }

    componentDidMount(){
        document.getElementById("title").addEventListener("click", this.resetAppToHomePage)
    }

    componentDidMount(){
        document.getElementById("infoopen").addEventListener("click", (ev)=>{
            ev.preventDefault()
            document.getElementById("infobox").style.left = "5px"
            document.getElementById("infobox").style.opacity = "1"
        })
        document.getElementById("infoclose").addEventListener("click", (ev)=>{
          ev.preventDefault()
            document.getElementById("infobox").style.left = "-1000px"
            document.getElementById("infobox").style.opacity = "0"
        })
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
          <div>
              <i id="infoopen" className="fa fa-flask flask-button"> </i>
          </div>
          <div id="infobox" className="infobox">
              <i id="infoclose" className="fa fa-times closebutton"> </i>
                <h3 className="infoboxTitle">Project Authors</h3>
                    <div className="infoboxList">Eddie Sung</div>
                    <div className="infoboxList">Sam Guerrero</div>
                    <div className="infoboxList">Cliff Knopik</div>

                <h3 className="infoboxTitle">Features</h3>

              <div className="infoboxList">Built on React</div>
              <div className="infoboxList">Blazing Fast CSS Rendering</div>
              <div className="infoboxList">Responsive Layout</div>
              <div className="infoboxList">Touch Device Compatible</div>

              <div className="infoboxGit">Source Code on <a href="https://github.com/UWJS300/Capstone-Sung-Knopik-Guerrero" target="_blank">Github</a></div>
          </div>
      </div>
    );
  }
}

export default withRouter(App);
