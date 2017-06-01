/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
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
        const tasteFilterStrings = [
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
        const tasteFilterList = tasteFilterStrings.map(item => {
          return <li key={item}>
            <form method='POST' action='/customize' onSubmit={this.routeWithNewTaste}>
              <input type='hidden' value={item} />
              <button type='submit'>{item}</button>
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
