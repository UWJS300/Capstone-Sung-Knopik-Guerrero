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
      baseAlcohol: PropTypes.string
    };

    constructor () {
      super()
      this.routeWithNewTaste = this.routeWithNewTaste.bind(this)
    }

    routeWithNewTaste (e) {
      e.preventDefault()
      this.props.updateTaste(e.target.children[0].value)
      this.props.history.push(`/drink-menu`)
    }

    render(){





        const selectedBaseAlcohol = this.props.baseAlcohol

		// Get the overall object from the JSON file - Cliff Knopik 6/1/17
		const tastesObject = require('../data/tastes.json');

		// log to show there is an array of objects - Cliff Knopik 6/1/17
		console.log("Tastes:");
		console.log(tastesObject.result);

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
            <form method='POST' action='/customize' onSubmit={this.routeWithNewTaste}>
              <input type='hidden' value={item.id} />
              <button type='submit'>{item.name}</button>
            </form>
          </li>
        })

        return(
            <div>
                <p>Filter Page</p>
                <p>Selected Base Alcohol: {selectedBaseAlcohol}</p>
                <p>Taste</p>
                <ul>
                  {tasteFilterList}
                </ul>
            </div>
        )


    }

}

export default withRouter(FilterPage)
