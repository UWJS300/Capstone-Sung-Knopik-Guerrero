/**
 * Edited by samguerrero on 5/31/2017.
  - added state and state updating functions
 * Edited by samguerrero on 6/3/2017.
  - display and filter api return function
 */
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
        baseAlcohol: 'LOADING...',
        tasteFilter: [],
        drinksLists: [],
        baseAlcoholAPIReturn: {},
      }
      this.updateBaseAlcohol = this.updateBaseAlcohol.bind(this)
      this.updateTaste = this.updateTaste.bind(this)
    }

    //when one of the base alcohol is clicked, it submits a form, which this function is the onSubmit for
    //this function was passed to the home.js through props
    updateBaseAlcohol (baseAlcoholName) {
      //jquery api call with jsonp
      //grabs the data then sets returned data as state
      $.get( 'http://addb.absolutdrinks.com/drinks/withtype/' + baseAlcoholName + '?pageSize=10000&apiKey=6b80f06201e8408f9502964f3c2fdd4c', ( result ) => {
        this.setState({
          baseAlcoholAPIReturn : result,
          baseAlcohol : baseAlcoholName,
        })
      }, 'jsonp');
    }

    //when one of the taste is clicked, it submits a form, which this function is the onSubmit for
    //this function was passed to the filter.js through props
    updateTaste (tasteName) {
      //If the taste is already added to the state, remove it, otherwise add it
      const newTasteState = this.state.tasteFilter
      if (newTasteState.includes(tasteName)) {
        const index = newTasteState.indexOf(tasteName)
        newTasteState.splice(index, 1)
      } else {
        newTasteState.push(tasteName)
      }
      //
      let filteredDrinks = []
      if (newTasteState.length === 1) {
        const allDrinksUnderBase = this.state.baseAlcoholAPIReturn.result
        const filteredDrinksForOne = allDrinksUnderBase.filter(function(item) {
          const allTastes = item.tastes.map(function(mapitem) {
            return mapitem.id
          })
          return allTastes.includes(newTasteState[0])
        })
        filteredDrinks = filteredDrinksForOne
      } else if (newTasteState.length > 1) {
        filteredDrinks = []
        const drinklistUserMatch = []
        const allDrinksUnderBase = this.state.baseAlcoholAPIReturn.result
        allDrinksUnderBase.forEach(function(value) {
            const drinkTasteUserTasteMatch = []
            const allTastes = value.tastes.map(function(mapitem) {
              return mapitem.id
            })
            allTastes.forEach(function(item) {
              if (newTasteState.includes(item)) {
                drinkTasteUserTasteMatch.push(true)
              }
            })
            if (allTastes.length === drinkTasteUserTasteMatch.length && newTasteState.length === allTastes.length) {
              drinklistUserMatch.push(value)
            }
        })
        filteredDrinks = drinklistUserMatch
      }
      //set the state of filtered api and checked taste list
      this.setState({
        drinksLists: filteredDrinks,
        tasteFilter: newTasteState
      })
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
                              baseAlcoholAPIReturn={this.state.baseAlcoholAPIReturn}
                              updateTaste={this.updateTaste}
                              tasteFilter={this.state.tasteFilter}
                              baseAlcohol={this.state.baseAlcohol}
                            />
                            )}/>
                        <Route exact path="/drink-menu" render={props=>(
                            <DrinkList
                              baseAlcohol={this.state.baseAlcohol}
                              tasteFilter={this.state.tasteFilter}
                              drinksLists={this.state.drinksLists}
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
