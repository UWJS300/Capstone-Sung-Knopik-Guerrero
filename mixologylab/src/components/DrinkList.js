/**
 * Created by eddiemac on 5/26/2017.
 * Added drinkList and sorting functions 6/3/17. Cliff Knopik
 */
import React from 'react'
import './DrinkList.css'
import PropTypes from 'prop-types'

class DrinkListPage extends React.Component{

    static propTypes = {
      baseAlcohol: PropTypes.string,
      tasteFilter: PropTypes.string,
      drinksLists: PropTypes.array,
    };

    render(){

		// Sort solutions found here: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
		// Use like this: SomeObject.sort(dynamicSort("aproperty"))
		function dynamicSort(property) {
			var sortOrder = 1;
			if(property[0] === "-") {
				sortOrder = -1;
				property = property.substr(1);
			}
		return function (a,b) {
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
			}
		}

		// Not currently tested or used - but included here for future expansion of features 6/3/17 Cliff Knopik
		// Use like this: SomeObject.sort(dynamicSortMultiple("aproperty1", "-aproperty2"));
		// - is used for ascending or descending
		function dynamicSortMultiple() {
			/*
			* save the arguments object as it will be overwritten
			* note that arguments object is an array-like object
			* consisting of the names of the properties to sort by
			*/
			var props = arguments;
			return function (obj1, obj2) {
				var i = 0, result = 0, numberOfProperties = props.length;
				/* try getting a different result from 0 (equal)
				* as long as we have extra properties to compare
				*/
				while(result === 0 && i < numberOfProperties) {
					result = dynamicSort(props[i])(obj1, obj2);
					i++;
				}
				return result;
			}
		}

    const { tasteFilter, baseAlcohol, drinksLists } = this.props

		// temp comment out for testing - might be replaced or modified - Cliff Knopik 6/2/17
        // const searchAPIdrinkList = searchAPI()

		// Get the overall object from the JSON file.
		// This is a temporary JSON call for testing the sort - the actual object returned
		// from the filters will replace this. - Cliff Knopik 6/2/17
		//const drinkListObject = require('../data/tempdrinklist.json');

		// log to show there is an array of objects - Cliff Knopik 6/2/17
		// console.log("Drink List:");
		// console.log(drinkListObject.result);

		// Assign the results - the array of drinks objects - Cliff Knopik 6/2/17
		const drinkListResults = drinksLists;

		// uncomment these below to test out different sorting
		// ascending by rating
		//drinkListResults.sort(dynamicSort("rating"))

		// descending by rating
		//drinkListResults.sort(dynamicSort("-rating"))

		// ascending by name
		//drinkListResults.sort(dynamicSort("name"))

		// descending by name
		drinkListResults.sort(dynamicSort("-name"))


		const drinkList = drinkListResults.map(item => {
          return <tr key={item.id}>
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
                <p>Selected Taste: {tasteFilter}</p>
                <p>Drinks returned: {drinksLists.length}</p>
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
