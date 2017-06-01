/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
 */
import React from 'react'
import './Home.css'
//import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class HomePage extends React.Component{

    static propTypes = {
      updateBaseAlcohol : PropTypes.func,
    };

    render(){

        const { updateBaseAlcohol } = this.props
        const baseAlcoholStrings = [
          'Brandy',
          'Gin',
          'Rum',
          'Tequila',
          'Vodka',
          'Whisky',
        ]
        const baseAlcoholList = baseAlcoholStrings.map(item => {
          return <li key={item}>
            <form method='POST' action='/customize' onSubmit={updateBaseAlcohol}>
              <input type='hidden' value={item} />
              <button type='submit'>{item}</button>
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

export default HomePage
