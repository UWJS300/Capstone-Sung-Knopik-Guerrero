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

/* This code removed as there appears to be missing color data. Preserved for future improvement.
 Went in the MenuText div: style={{borderColor: squareItem.color.toLowerCase()}}>
*/
class MenuSquare extends React.Component{
    

    render(){
        const {squareItem} = this.props

        return(
            <div className="MenuSquareContainer">
				<Link to={`/drink/${squareItem.id}`}>
                <div className="MenuImageDiv" >
					<div className="TopInfo" >RATING: {squareItem.rating}<br />{squareItem.name}</div>
                    <img id={squareItem.id} className="MenuImage" src={`http://assets.absolutdrinks.com/drinks/solid-background-black/soft-shadow/floor-reflection/415x655/${squareItem.id}(85).jpg`} alt="{squareItem.name}"/>
                    <div className="MenuText" style={{borderColor: 'white'}}><h3>{createIngredients(squareItem.ingredients)}</h3></div>
                </div>
				</Link>
            </div>
        )
    }
    
}

export default MenuSquare