/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
 */
import React from 'react'
import './Filter.css'
<<<<<<< HEAD
import { withRouter } from 'react-router-dom'
=======
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
import PropTypes from 'prop-types'

class FilterPage extends React.Component{

    static propTypes = {
      updateTaste : PropTypes.func,
<<<<<<< HEAD
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
=======
    };

    render(){

        const { updateTaste } = this.props
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
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
<<<<<<< HEAD
            <form method='POST' action='/customize' onSubmit={this.routeWithNewTaste}>
=======
            <form method='POST' action='/customize' onSubmit={updateTaste}>
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
              <input type='hidden' value={item} />
              <button type='submit'>{item}</button>
            </form>
          </li>
        })

        return(
            <div>
                <p>Filter Page</p>
<<<<<<< HEAD
                <p>Selected Base Alcohol: {selectedBaseAlcohol}</p>
=======
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
                <p>Taste</p>
                <ul>
                  {tasteFilterList}
                </ul>
            </div>
        )
    }

}

<<<<<<< HEAD
export default withRouter(FilterPage)
=======
export default FilterPage
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
