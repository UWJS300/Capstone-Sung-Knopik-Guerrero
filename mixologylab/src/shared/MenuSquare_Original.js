/**
 * Created by eddiemac on 5/24/2017.
 */
import React from 'react'
import './MenuSquare.css'





class MenuSquare extends React.Component{

    render(){
        const {squareItem} = this.props

        return(
            <div className="MenuSquareContainer">
                <div className="MenuImageDiv" >
                    <img className="MenuImage" src={squareItem.imageUrl} alt="Space Needle"/>
                    <div className="MenuText" style={{backgroundColor: squareItem.textBackgroundColor}}><h3>{squareItem.name}</h3></div>
                </div>
            </div>
        )
    }
    
}

export default MenuSquare