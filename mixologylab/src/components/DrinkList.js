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
		
		// temp comment out for testing - might be replaced or modified - Cliff Knopik 6/2/17
        // const searchAPIdrinkList = searchAPI()

		// Get the overall object from the JSON file.
		// This is a temporary JSON call for testing the sort - the actual object returned
		// from the filters will replace this. - Cliff Knopik 6/2/17
		const drinkListObject = require('../data/tempdrinklist.json'); 
		
		// log to show there is an array of objects - Cliff Knopik 6/2/17
		console.log("Drink List:");
		console.log(drinkListObject.result);

		// Assign the results - the array of drinks objects - Cliff Knopik 6/2/17
		const drinkListResults = drinkListObject.result;
		
		const drinkList = drinkListResults.map(item => {
          return <tr>
            <td >{item.name} </td><td >{item.rating} </td><td >{item.descriptionPlain}</td></tr>
        })

		/* temp comment out for testing - might be replaced or modified - Cliff Knopik 6/2/17
		 return(
            <div>
                <p>Drink List Page</p>
                <p>Selected Base Alcohol: {baseAlcohol}</p>
                <p>Selected Taste: {baseAlcohol}</p>		
				<p>API Return: {searchAPIdrinkList}</p>

            </div>
        )
		*/
        return(
            <div>
                <p>Drink List Page</p>
                <p>Selected Base Alcohol: {baseAlcohol}</p>
                <p>Selected Taste: {baseAlcohol}</p>
				<table>
				<thead>
				<tr><th>NAME</th><th>RATING</th><th>DESCRIPTION</th></tr>
				</thead>
				<tbody>
                  {drinkList}
				</tbody>
				</table>
            </div>
        )
    }

}

export default DrinkListPage
