/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
 */
import React from 'react'
import './Filter.css'
import PropTypes from 'prop-types'

class FilterPage extends React.Component{

    static propTypes = {
      updateTaste : PropTypes.func,
    };

    render(){

        const { updateTaste } = this.props
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
            <form method='POST' action='/customize' onSubmit={updateTaste}>
              <input type='hidden' value={item} />
              <button type='submit'>{item}</button>
            </form>
          </li>
        })

        return(
            <div>
                <p>Filter Page</p>
                <p>Taste</p>
                <ul>
                  {tasteFilterList}
                </ul>
            </div>
        )
    }

}

export default FilterPage
