/**
 * Created by eddiemac on 5/26/2017.
 */
import React from 'react'
import './DrinkDetail.css'

class DrinkDetailPage extends React.Component{


    render(){
        const {drink, drinkItem} = this.props
        return(
            <div>
                <p>Drink Detail Page</p>
                <p>{drink}</p>
                <img src={`http://assets.absolutdrinks.com/drinks/solid-background-black/soft-shadow/floor-reflection/415x655/${drink}(85).jpg`}></img>
                <p>{JSON.stringify(drinkItem)}</p>
            </div>
        )
    }

}
export default DrinkDetailPage