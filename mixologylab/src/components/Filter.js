/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
  - added state and state updating buttons
 * Edited by hafgan (Cliff Knopik) on 6/1/17
	- created get JSON file option and loop to populate list
 */
import React from 'react'
import './Filter.css'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class FilterPage extends React.Component{

    static propTypes = {
      updateTaste : PropTypes.func,
      baseAlcohol: PropTypes.string,
      baseAlcoholAPIReturn: PropTypes.object,
      tasteFilter: PropTypes.array
    };

    constructor () {
      super()
      this.state = {
        berry : false,
        bitter : false,
        fresh : false,
        fruity : false,
        herb : false,
        sour : false,
        spicy : false,
        spiritsPalpable : false,
        sweet : false
      }
      this.routeWithNewTaste = this.routeWithNewTaste.bind(this)
      this.whichState = this.whichState.bind(this)
    }

    routeWithNewTaste (e) {
      e.preventDefault()
      this.props.updateTaste(e.target.value)
      switch (e.target.value) {
        case 'berry':
          console.log(this.state.berry)
          if (this.state.berry !== true) { this.setState({ berry : true }) } else { this.setState({ berry : false }) }
          break;
        case 'bitter':
          return this.state.bitter
          break;
        case 'fresh':
          return this.state.fresh
          break;
        case 'fruity':
          return this.state.fruity
          break;
        case 'herb':
          return this.state.herb
          break;
        case 'sour':
          return this.state.sour
          break;
        case 'spicy':
          return this.state.spicy
          break;
        case 'spirits-palpable':
          return this.state.spiritsPalpable
          break;
        case 'sweet':
          return this.state.sweet
          break;
        default:
          return false
      }
      //this.props.history.push(`/drink-menu`)
    }

    whichState (itemName) {
      switch (itemName) {
        case 'berry':
          return this.state.berry
          break;
        case 'bitter':
          return this.state.bitter
          break;
        case 'fresh':
          return this.state.fresh
          break;
        case 'fruity':
          return this.state.fruity
          break;
        case 'herb':
          return this.state.herb
          break;
        case 'sour':
          return this.state.sour
          break;
        case 'spicy':
          return this.state.spicy
          break;
        case 'spirits-palpable':
          return this.state.spiritsPalpable
          break;
        case 'sweet':
          return this.state.sweet
          break;
        default:
          return false
      }
    }

    render(){

    //const { tasteFilter } = this.props

    const selectedBaseAlcohol = this.props.baseAlcohol
    const selectedBaseAlcoholCount = this.props.baseAlcoholAPIReturn.totalResult

		// Get the overall object from the JSON file - Cliff Knopik 6/1/17
		const tastesObject = require('../data/tastes.json');

		// log to show there is an array of objects - Cliff Knopik 6/1/17
		//console.log("Tastes:");
		//console.log(tastesObject.result);

		// Assign the results - the array of tastes objects - Cliff Knopik 6/1/17
		const tasteFilterStrings = tastesObject.result;

       /* const tasteFilterStrings = [
          'Berry',
          'Bitter',
          'Fresh',
          'Fruity',
          'Herb',
          'Sour',
          'Spicy',
          'Spirits Palpable',
          'Sweet',
        ]
		*/

      const tasteFilterList = tasteFilterStrings.map(item => {
        return <li key={item.id}>
          <input type='checkbox' name={item.name} value={item.id} checked={ this.whichState(item.id) } onChange={this.routeWithNewTaste}/>{item.name}
        </li>
      })

        return(
            <div>
                <p>Filter Page</p>
                <p>Selected Base Alcohol: {selectedBaseAlcohol}</p>
                <p>Amount in category: {selectedBaseAlcoholCount ? selectedBaseAlcoholCount : 'LOADING...'}</p>
                <p>Taste:</p>
                <ul>
                  {selectedBaseAlcohol !== 'LOADING...' ? tasteFilterList : <p></p>}
                </ul>
            </div>
        )


    }

}

export default withRouter(FilterPage)
