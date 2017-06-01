/**
 * Created by eddiemac on 5/26/2017.
 */
import React from 'react'
import './DrinkList.css'
<<<<<<< HEAD
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
=======

class DrinkListPage extends React.Component{
    render(){
        return(
            <div>
                <p>Drink List Page</p>
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
            </div>
        )
    }

}

<<<<<<< HEAD
export default DrinkListPage
=======
export default DrinkListPage
>>>>>>> 65da61f4cdd93c02bc71a06f7537dda0567ed12a
