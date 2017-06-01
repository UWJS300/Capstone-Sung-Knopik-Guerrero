/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
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
              <form method='POST' action='/customize' onSubmit={this.routeWithNewBaseAlcohol}>
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

export default withRouter(HomePage)
