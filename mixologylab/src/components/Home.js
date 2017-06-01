/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
 */
import React from 'react'
import './Home.css'
<<<<<<< HEAD
import { withRouter } from 'react-router-dom'
=======
//import { Link } from 'react-router-dom'
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
import PropTypes from 'prop-types'

class HomePage extends React.Component{

    static propTypes = {
      updateBaseAlcohol : PropTypes.func,
    };

<<<<<<< HEAD
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

=======
    render(){

        const { updateBaseAlcohol } = this.props
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
        const baseAlcoholStrings = [
          'Brandy',
          'Gin',
          'Rum',
          'Tequila',
          'Vodka',
          'Whisky',
        ]
        const baseAlcoholList = baseAlcoholStrings.map(item => {
<<<<<<< HEAD
            return <li key={item}>
              <form method='POST' action='/customize' onSubmit={this.routeWithNewBaseAlcohol}>
                <input type='hidden' value={item} />
                <button type='submit'>{item}</button>
              </form>
            </li>
=======
          return <li key={item}>
            <form method='POST' action='/customize' onSubmit={updateBaseAlcohol}>
              <input type='hidden' value={item} />
              <button type='submit'>{item}</button>
            </form>
          </li>
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
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

<<<<<<< HEAD
export default withRouter(HomePage)
=======
export default HomePage
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
