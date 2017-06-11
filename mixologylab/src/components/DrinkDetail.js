/**
 * Created by eddiemac on 5/26/2017.
 */
import React from 'react'
import './DrinkDetail.css'

class DrinkDetailPage extends React.Component{



    render(){
        const {drinkItem} = this.props
        const drink = drinkItem[0]
        const drink1={
            "description": "[Fill|Action|fill] a [shaker|Tool|boston-shaker] with [ice cubes|Ingredient|ice-cubes]. [Add|Action|add] all ingredients. [Shake|Action|shake] and [strain|Action|strain] into a chilled [cocktail glass|Glass|cocktail-glass]. [Garnish|Action|garnish] with lemon and a maraschino berry.",
            "story": "",
            "color": "Red",
            "rating": 33,
            "skill": {"id": "average", "name": "Average", "value": 2},
            "videos": [{"video": "S9kyRO3KW8o", "type": "youtube"}, {"video": "angelica.mp4", "type": "assets"}],
            "isAlcoholic": true,
            "isCarbonated": false,
            "isHot": false,
            "tags": [{"owner": "apps/225", "name": "drinkspiration"}],
            "servedIn": {"id": "cocktail-glass", "text": "Cocktail Glass"},
            "ingredients": [
                {"type": "ice", "id": "ice-cubes", "text": "[Ice Cubes]", "textPlain": "Ice Cubes"}, {
                    "type": "gin",
                    "id": "gin",
                    "text": "1 Part [Gin]",
                    "textPlain": "1 Part Gin"
                }, {
                    "type": "spirits-other",
                    "id": "benedictine-dom",
                    "text": "1 Part [Benedictine DOM]",
                    "textPlain": "1 Part Benedictine DOM"
                }, {
                    "type": "spirits-other",
                    "id": "maraschino-liqueur",
                    "text": "1 Part [Maraschino Liqueur]",
                    "textPlain": "1 Part Maraschino Liqueur"
                }, {
                    "type": "spirits-other",
                    "id": "campari",
                    "text": "1 Dash [Campari]",
                    "textPlain": "1 Dash Campari"
                }, {"type": "fruits", "id": "lemon", "text": "1 Spiral [Lemon]", "textPlain": "1 Spiral Lemon"}, {
                    "type": "berries",
                    "id": "maraschino-berry",
                    "text": "1 Whole [Maraschino Berry]",
                    "textPlain": "1 Whole Maraschino Berry"
                }],
            "tastes": [{"id": "bitter", "text": "Bitter"}, {"id": "fresh", "text": "Fresh"}, {
                "id": "herb",
                "text": "Herb"
            }, {"id": "sweet", "text": "Sweet"}],
            "occasions": [{"id": "afternoon", "text": "Afternoon Drinks"}],
            "tools": [{"id": "freezer", "text": "Freezer"}, {"id": "jigger", "text": "Jigger"}, {
                "id": "strainer",
                "text": "Strainer"
            }, {"id": "twist-knife", "text": "Twist Knife"}, {"id": "boston-shaker", "text": "Boston Shaker"}],
            "drinkTypes": [],
            "actions": [{"id": "fill", "text": "Fill"}, {"id": "add", "text": "Add"}, {
                "id": "shake",
                "text": "Shake"
            }, {"id": "strain", "text": "Strain"}, {"id": "chill", "text": "Chill"}, {"id": "garnish", "text": "Garnish"}],
            "brands": ["absolut"],
            "languageBranch": "en",
            "id": "angelica",
            "name": "Angelica",
            "descriptionPlain": "Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with lemon and a maraschino berry."
        }
        return(
            <div>
                <div className="drinkTitle">{drink.name}</div>
                <div className="drinkDetailContainer">
                    <img className="drinkDetailImage" src={`http://assets.absolutdrinks.com/drinks/solid-background-black/soft-shadow/floor-reflection/415x655/${drink.id}(85).jpg`}></img>
                    <div className="drinkDetailIngredients">
                        <ul>
                            {drink.ingredients.map(function(item){
                                return(<li>{item.textPlain}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="drinkDetailDescription">{drink.descriptionPlain}</div>
                </div>

            </div>
        )
    }

}
export default DrinkDetailPage

