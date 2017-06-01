/**
 * Created by eddiemac on 5/26/2017.
 */
import React from 'react'
import './DrinkDetail.css'

class DrinkDetailPage extends React.Component{

    render(){
        const {drink} = this.props
        return(
            <div>
                <p>Drink Detail Page</p>
                <p>{drink}</p>
            </div>
        )
    }

}

export default DrinkDetailPage