import React from 'react';
import ReactDOM from 'react-dom';
import {
BrowserRouter as Router,
Switch,
<<<<<<< HEAD
Route,
=======
Route
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
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
<<<<<<< HEAD
        baseAlcohol: 'None',
        tasteFilter: 'None',
=======
        baseAlcohol: '',
        tasteFilter: '',
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
        drinkList: {},
      }
      this.updateBaseAlcohol = this.updateBaseAlcohol.bind(this)
      this.updateTaste = this.updateTaste.bind(this)
<<<<<<< HEAD
      this.searchAPI = this.searchAPI.bind(this)
    }

    updateBaseAlcohol (baseAlcoholName) {
      this.setState({
        baseAlcohol : baseAlcoholName
      })
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

=======
    }

    updateBaseAlcohol (e) {
      e.preventDefault()
      this.setState({
        baseAlcohol : e.target.children[0].value
      })
    }

    updateTaste (e) {
      e.preventDefault()
      this.setState({
        tasteFilter : e.target.children[0].value
      })
    }

>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
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
<<<<<<< HEAD
                              baseAlcohol={this.state.baseAlcohol}
                            />
                            )}/>
                        <Route exact path="/drink-menu" render={props=>(
                            <DrinkList
                              baseAlcohol={this.state.baseAlcohol}
                              tasteFilter={this.state.tasteFilter}
                              searchAPI={this.searchAPI}
                            />
=======
                            />
                            )}/>
                        <Route exact path="/drink-menu" render={props=>(
                            <DrinkList/>
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
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
