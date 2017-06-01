import React from 'react';
import ReactDOM from 'react-dom';
import {
BrowserRouter as Router,
Switch,
Route
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
        baseAlcohol: '',
        tasteFilter: '',
        drinkList: {},
      }
    }

    render(){
        return(
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" render={props=>(
                            <Home/>
                            )}/>
                        <Route exact path="/customize" render={props=>(
                            <Filter/>
                            )}/>
                        <Route exact path="/drink-menu" render={props=>(
                            <DrinkList/>
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
