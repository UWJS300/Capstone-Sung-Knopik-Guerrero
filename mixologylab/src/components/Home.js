/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
    - added state and state updating buttons
  * Edited by hafgan (Cliff Knopik) on 6/1/17
	- created get JSON file option and loop to populate list
 */
import React from 'react'
import './Home.css'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class HomePage extends React.Component{

    static propTypes = {
      updateBaseAlcohol : PropTypes.func,
    };

    constructor () {
      super()
      this.routeWithNewBaseAlcohol = this.routeWithNewBaseAlcohol.bind(this)
    }

    routeWithNewBaseAlcohol (e) {
      e.preventDefault()
      this.props.updateBaseAlcohol(e.target.children[0].value)
      this.props.history.push(`/customize`)
    }

    render(){

		// Get the overall object from the JSON file - Cliff Knopik 6/1/17
		const basespiritsObject = require('../data/basespirits.json');

		// log to show there is an array of objects - Cliff Knopik 6/1/17
		//console.log("BaseSpirits:");
		//console.log(basespiritsObject.result);

		// Assign the results - the array of tastes objects - Cliff Knopik 6/1/17
		const baseAlcoholStrings = basespiritsObject.result;
		/*
        const baseAlcoholStrings = [
          'Brandy',
          'Gin',
          'Rum',
          'Tequila',
          'Vodka',
          'Whisky',
        ]
		*/

        const baseAlcoholList = baseAlcoholStrings.map(item => {
            return <li key={item.type}>
              <form method='POST' action='/customize' onSubmit={this.routeWithNewBaseAlcohol}>
                <input type='hidden' value={item.type} />
                <button type='submit'>{item.name}</button>
              </form>
            </li>
        })

        return(
            <div>
                <p>Home Page</p>
                <ul>
                  {baseAlcoholList}
                </ul>
            </div>
        )
    }

}

export default withRouter(HomePage)
