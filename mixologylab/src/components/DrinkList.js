/**
 * Created by eddiemac on 5/26/2017.
 * Added drinkList and sorting functions 6/3/17. Cliff Knopik
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './DrinkList.css'
import '../css/font-awesome-4.7.0/css/font-awesome.min.css'
import PropTypes from 'prop-types'
import seattleData from '../data/MenuDatabase'
import MenuSquare from '../shared/MenuSquare'

class DrinkListPage extends React.Component{

    constructor(){
        super()
        this.redirectToDrinkDetail = this.redirectToDrinkDetail.bind(this)
		this.sortListBy = this.sortListBy.bind(this)
    }

    static propTypes = {
      baseAlcohol: PropTypes.string,
      tasteFilter: PropTypes.array,
      drinksLists: PropTypes.array,
      baseAlcoholAPIReturn: PropTypes.object,
    };

    redirectToDrinkDetail(e, drinkName){
        e.preventDefault()
        this.props.history.push(`/drink/${drinkName}`)
    }

	sortListBy(e){
			e.preventDefault()
			console.log(e.target.getAttribute("value"))
			this.props.updateSortDrinkListBy(e.target.getAttribute("value"))
	}

	    //Attaches event handlers to DOM
    componentDidMount(){
        document.getElementById("NameAsc").addEventListener("click", this.sortListBy)
		document.getElementById("NameDesc").addEventListener("click", this.sortListBy)
		document.getElementById("RatingAsc").addEventListener("click", this.sortListBy)
		document.getElementById("RatingDesc").addEventListener("click", this.sortListBy)


    }

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

    const { baseAlcoholAPIReturn, tasteFilter, baseAlcohol, drinksLists, sortDrinkListBy } = this.props

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
			const sortBy = sortDrinkListBy;

			drinkListResults.sort(dynamicSort(sortBy))

/* NO LONGER NEEDED - replaced with MenuSquare layout
		function createIngredients(ingredientsArray){
		//console.log(ingredientsArray)

			const ingredientsList = ingredientsArray.map(ingredientObject => {
				//console.log(ingredientObject)
				return ingredientObject.textPlain + ', '

			})
			return ingredientsList

		}

		const drinkList = drinkListResults.map(item => {
          return <tr key={item.id}>
            <td ><Link to={`/drink/${item.id}`}>{item.name}</Link> </td><td >{item.rating} </td><td >{createIngredients(item.ingredients)}</td></tr>
        })

		// The below HTML had been in the render area
				<table>
				<thead>
				<tr><th>NAME</th><th>RATING</th><th>DESCRIPTION</th></tr>
				</thead>
				<tbody id="test">
                  {drinkList}
				</tbody>
				</table>

*/

		/* temp comment out for testing - might be replaced or modified - Cliff Knopik 6/2/17
		 return(
            <div>
                <p>Drink List Page</p>
                <p>Selected Base Alcohol: {baseAlcohol}</p>
                <p>Selected Taste: {baseAlcohol}</p>
				<p>API Return: {searchAPIdrinkList}</p>

            </div>
        )


					<a href="#" id="sortStyleDefault"><i className="fa fa-sort-alpha-asc fa-4x" aria-hidden="true" ></i></a>
			<a href="#"><i className="fa fa-sort-alpha-desc fa-4x" aria-hidden="true"></i></a>
			<a href="#"><i className="fa fa-sort-numeric-asc fa-4x" aria-hidden="true"></i></a>
			<a href="#"><i className="fa fa-sort-numeric-desc fa-4x" aria-hidden="true"></i></a>
		*/

		/* Traditional Buttons replaced by icons
							<button type="submit" name="name" value="name" onClick={this.sortListBy}>Sort Name Ascending</button>
					<button type="submit" name="-name" value="-name" onClick={this.sortListBy}>Sort Name Descending</button>
					<button type="submit" name="rating" value="rating" onClick={this.sortListBy}>Sort Rating Ascending</button>
					<button type="submit" name="-rating" value="-rating" onClick={this.sortListBy}>Sort Rating Descending</button>

<br />
*/
        return(
            <div>

<span id="NameAsc" value="name" >
<i className="fa fa-sort-alpha-asc fa-2x sortIcons" aria-hidden="true" value="name" style={{margin: '5px 50px 0px 0px'}} ></i>
</span>
<span id="NameDesc" value="-name">
<i className="fa fa-sort-alpha-desc fa-2x sortIcons" aria-hidden="true" value="-name" style={{margin: '5px 50px 0px 0px'}}></i>
</span>
<span id="RatingAsc" value="rating">
<i className="fa fa-sort-numeric-asc fa-2x sortIcons" aria-hidden="true" value="rating" style={{margin: '5px 50px 0px 0px'}}></i>
</span>
<span id="RatingDesc" value="-rating">
<i className="fa fa-sort-numeric-desc fa-2x sortIcons" aria-hidden="true" value="-rating" style={{margin: '5px 0px 0px 0px'}} ></i>
</span>

				{/* <br/><br/>
        <p>Selected Base Alcohol: {baseAlcohol.toUpperCase()}</p>
        <p>Selected Taste: {tasteFilter.map(item => item.charAt(0).toUpperCase() + item.slice(1) + ' | ')}</p>
        <p>Drinks returned: {drinksLists.length}</p>*/}

				<div className="menucontainer">
          <div className="flexcontainer">
					{
          drinksLists.length === 0 && baseAlcoholAPIReturn.result ? baseAlcoholAPIReturn.result.map(item => {
  					const squareItem = item
  					return (<MenuSquare key={squareItem.id} squareItem={squareItem}></MenuSquare>)
          })
          :
          drinkListResults.map(item => {
  					const squareItem = item
  					return (<MenuSquare key={squareItem.id} squareItem={squareItem}></MenuSquare>)
					})
					}
        </div>
        </div>

            </div>
        )
    }

}

/*   Sample from above return
                    {Object.keys(seattleData).map(key=>{
                        const squareItem = seattleData[key]
                        return(<MenuSquare squareItem={squareItem}></MenuSquare>)
                    })
                    }
					*/

export default DrinkListPage
