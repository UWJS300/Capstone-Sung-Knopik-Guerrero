/**
 * Created by eddiemac on 5/26/2017.
 */
import React from 'react'
import './DrinkList.css'
import PropTypes from 'prop-types'

class DrinkListPage extends React.Component{

    static propTypes = {
      baseAlcohol: PropTypes.string,
      tasteFilter: PropTypes.string,
      searchAPI : PropTypes.func,
    };

    render(){

        const { searchAPI, baseAlcohol } = this.props
        const searchAPIdrinkList = searchAPI()

        return(
            <div>
                <p>Drink List Page</p>
                <p>Selected Base Alcohol: {baseAlcohol}</p>
                <p>Selected Taste: {baseAlcohol}</p>
                <p>API Return: {searchAPIdrinkList}</p>
            </div>
        )
    }

}

export default DrinkListPage
