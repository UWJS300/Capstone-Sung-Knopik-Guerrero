/**
 * Created by eddiemac on 5/24/2017.
 */
import React from 'react'
import './MenuSquare.css'
import {Link} from 'react-router-dom'


		function createIngredients(ingredientsArray){
		//console.log(ingredientsArray)

			const ingredientsList = ingredientsArray.map(ingredientObject => {
				//console.log(ingredientObject)
				return ingredientObject.textPlain + ', '

			})
			return ingredientsList

		}


class MenuSquare extends React.Component{

    render(){
        const {squareItem} = this.props

        return(
            <div className="MenuSquareContainer">
				<Link to={`/drink/${squareItem.id}`}>
                <div className="MenuImageDiv" >
					<div className="TopInfo" >{squareItem.name} <span className="drinkRating">{(squareItem.rating/10).toFixed(1)}<i className="fa fa-star"> </i></span></div>
                    <img id={squareItem.id} className="MenuImage" src={`http://assets.absolutdrinks.com/drinks/solid-background-black/soft-shadow/floor-reflection/415x655/${squareItem.id}(85).jpg`} alt="{squareItem.name}"/>
                    <div className="MenuText" style={{borderColor: squareItem.color ? squareItem.color.toLowerCase() : '#333333'}}><h3>{createIngredients(squareItem.ingredients)}</h3></div>
                </div>
				</Link>
            </div>
        )
    }

}

export default MenuSquare
