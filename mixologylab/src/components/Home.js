/**
 * Created by eddiemac on 5/26/2017.
 * Edited by samguerrero on 5/31/2017.
    - added state and state updating buttons
  * Edited by hafgan (Cliff Knopik) on 6/1/17
	- created get JSON file option and loop to populate list
 */
import React from 'react'
import './Home.css'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import WheelSelector from '../shared/WheelSelector'

class HomePage extends React.Component{

    static propTypes = {
      updateBaseAlcohol : PropTypes.func,
    };


    render(){
        

        return(
            <div>
                
                <div class="wheelcontainer">
                    <WheelSelector updateBaseAlcohol={this.props.updateBaseAlcohol}> </WheelSelector>
                </div>
            </div>
        )
    }

}

export default withRouter(HomePage)
