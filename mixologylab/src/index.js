import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import {
BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//import components
import App from './App'
import Home from './components/Home'
import Filter from './components/Filter'
import DrinkDetail from './components/DrinkDetail'
import DrinkList from './components/DrinkList'

//import css
import './index.css';

class Root extends React.Component{
    //insert State
    constructor () {
      super()
      this.state = {
        baseAlcohol: 'None',
        tasteFilter: 'None',
        drinkList: {},
        baseAlcoholAPIReturn: {},
      }
      this.updateBaseAlcohol = this.updateBaseAlcohol.bind(this)
      this.updateTaste = this.updateTaste.bind(this)
      this.searchAPI = this.searchAPI.bind(this)
    }

    updateBaseAlcohol (baseAlcoholName) {
      $.get( 'http://addb.absolutdrinks.com/drinks/withtype/' + baseAlcoholName + '?pageSize=10000&apiKey=6b80f06201e8408f9502964f3c2fdd4c', ( result ) => {
        this.setState({
          baseAlcoholAPIReturn : result,
          baseAlcohol : baseAlcoholName,
        })
      }, 'jsonp');
    }

    updateTaste (tasteName) {
      this.setState({
        tasteFilter : tasteName
      })
    }

    searchAPI () {
      const taste = this.state.tasteFilter
      const base = this.state.baseAlcohol
      return `${base} ${taste}`
    }

    render(){
        return(
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" render={props => (
                            <Home
                              updateBaseAlcohol={this.updateBaseAlcohol}
                            />
                            )}/>
                        <Route exact path="/customize" render={props=>(
                            <Filter
                              updateTaste={this.updateTaste}
                              baseAlcohol={this.state.baseAlcohol}
                            />
                            )}/>
                        <Route exact path="/drink-menu" render={props=>(
                            <DrinkList
                              baseAlcohol={this.state.baseAlcohol}
                              tasteFilter={this.state.tasteFilter}
                              searchAPI={this.searchAPI}
                            />
                            )}/>
                        <Route path="/drink/:drink" render={props=> {
                            const drink = props.match.params.drink
                            return(<DrinkDetail drink={drink}/>)
                            }}/>
                    </Switch>
                </App>
            </Router>
        )
    }

}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
