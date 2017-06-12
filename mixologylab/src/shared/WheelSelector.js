/**
 * Created by eddiemac on 6/9/2017.
 */
import React from 'react'
import './WheelSelector.css'
import {withRouter} from 'react-router-dom'

import '../css/font-awesome-4.7.0/css/font-awesome.min.css'

//define variables and const
let startingDegree, down =0
let numberRotationsCounter = 0
let infiniteDegrees =0
let x =0, y=0, absoluteDegree =0, absOffsetDegree, previousAbsOffsetDegree
const  alcoholList = {
    1: {
        name: "Gin",
        type:"gin",
        color: "#4FC1E9",
        startDegree: 0.00001,
        stopDegree: 59.999
    },
    2: {
        name: "Rum",
        type:"rum",
        color: "#D8334A",
        startDegree: 60,
        stopDegree: 119.999
    },
    3: {
        name: "Whisky",
        type:"whisky",
        color: "#A0D468",
        startDegree: 120,
        stopDegree: 179.999
    },
    4: {
        name: "Brandy",
        type:"brandy",
        color: "#fc7cb7",
        startDegree: 180,
        stopDegree: 239.999
    },
    5: {
        name: "Tequila",
        type:"tequila",
        color: "#FFCE54",
        startDegree: 240,
        stopDegree: 299.999
    },
    6: {
        name: "Vodka",
        type:"vodka",
        color: "#8067B7",
        startDegree: 300,
        stopDegree: 360
    }
}
let alcoholObject = alcoholList[1]

class WheelSelector extends React.Component{
    constructor(){
        super()
        this.inputUpdate = this.inputUpdate.bind(this)
        this.mouseToSpinWheel = this.mouseToSpinWheel.bind(this)
        this.wheelSelectorByDegree = this.wheelSelectorByDegree.bind(this)
        this.setDownTrue = this.setDownTrue.bind(this)
        this.setDownFalse = this.setDownFalse.bind(this)
        this.routeWithNewBaseAlcohol = this.routeWithNewBaseAlcohol.bind(this)
        this.touchToSpinWheel = this.touchToSpinWheel.bind(this)
    }

    //These two event functions track "mousedown" and "mouseup"
    setDownTrue(e){
        e.preventDefault()
        down = 1
        console.log(down)
        console.log(e)
        //for touch devices, starting degree needs to be captured on touchstart
        if(e.type === "touchstart"){
            startingDegree = Math.atan2(e.touches[0].clientY, e.touches[0].clientX) * (180 / Math.PI)
            startingDegree = (-infiniteDegrees + startingDegree + 360) % 360
        }
         }
    setDownFalse(e){
        e.preventDefault()
        down = 0
        console.log(down, e.type)
    }
    
    //This function changes the rotation of the div#wheel element.
    inputUpdate(angle){
        // Debugging Tool: document.getElementById("test").innerText = angle
        document.getElementById('wheel').style.transform = `rotate(${angle}deg)`
        document.getElementById('wheel').style["-webkit-"+"transform"] = `rotate(${angle}deg)`
        document.getElementById('wheel').style["-moz-"+"transform"] = `rotate(${angle}deg)`
        document.getElementById('wheel').style["-o-"+"transform"] = `rotate(${angle}deg)`

    }


    touchToSpinWheel(e) {
        const wheel = document.getElementById("wheel")
        x = e.touches[0].clientX - wheel.offsetLeft - (wheel.clientHeight) / 2;
        y = e.touches[0].clientY - wheel.offsetTop - (wheel.clientWidth) / 2;
        console.log(e.type, x, y)
        // Goal: Convert coordinates to 360 degree spin.
        // Goal: Grab coordinates only while mouse is down
        // Notes: Uses arc tangent to grab math. Since degrees goes from
        // -180 degrees to +180 degrees, we use mod function.
        if (down === 1) {
            absoluteDegree = Math.atan2(y, x) * (180 / Math.PI)
            absoluteDegree = (absoluteDegree + 360) % 360
            //Goal: When going from 345 degrees to 15 degrees, add one to the
            //rotation counter.  When going from 15 to 345, subtract one.
            absOffsetDegree = (absoluteDegree - startingDegree + 360) % 360
            //Keep track of number of 360 degreerotations
            if (previousAbsOffsetDegree > 345 && absOffsetDegree < 15) {
                numberRotationsCounter++
            }
            if (previousAbsOffsetDegree < 15 && absOffsetDegree > 345) {
                numberRotationsCounter--
            }
            //Goal: Record previous state so we know when to increment numberRotationCounter.
            previousAbsOffsetDegree = absOffsetDegree
            //final degree = number of rotations plus (absoluteDegree minus startingdegree)
            infiniteDegrees = numberRotationsCounter * 360 + absOffsetDegree
            //update CSS to rotate wheel
            this.inputUpdate(infiniteDegrees)
            //update drink name based on wheel's infinitedegree angle
            this.wheelSelectorByDegree(infiniteDegrees).then(function (result) {
                document.getElementById("drinkname").innerText = result.name
                document.getElementById("drinkname").style.color = result.color
            })
        }
    }


    //This event function tracks "mouseover"
    mouseToSpinWheel(e){
        e.preventDefault()
        const wheel = document.getElementById("wheel")
        // Goal: grab x and y coordinates
        // Notes: Position (0, 0) is at the center of the wheel
        // Math: x-coordinate = cursor position - div offset - half div size
        if (e.type === "mousemove") {
            console.log(e.type)
            x = e.clientX - wheel.offsetLeft - (wheel.clientHeight) / 2;
            y = e.clientY - wheel.offsetTop - (wheel.clientWidth) / 2;
        } else if (e.type === "touchmove") {
            x = e.touches[0].clientX - wheel.offsetLeft - (wheel.clientHeight) / 2;
            y = e.touches[0].clientY - wheel.offsetTop - (wheel.clientWidth) / 2;
            console.log(e.type)

        }
        // Goal: Grab Starting Degree so we offset it
        if (down !== 1){
            startingDegree = Math.atan2(y,x)*(180/Math.PI)
            startingDegree = (-infiniteDegrees+startingDegree+360)%360
        }
        // Goal: Convert coordinates to 360 degree spin.
        // Goal: Grab coordinates only while mouse is down
        // Notes: Uses arc tangent to grab math. Since degrees goes from
        // -180 degrees to +180 degrees, we use mod function.
        if (down === 1) {
            absoluteDegree = Math.atan2(y, x) * (180 / Math.PI)
            absoluteDegree = (absoluteDegree + 360) % 360
            //Goal: When going from 345 degrees to 15 degrees, add one to the
            //rotation counter.  When going from 15 to 345, subtract one.
            absOffsetDegree = (absoluteDegree - startingDegree + 360) % 360
            //Keep track of number of 360 degreerotations
            if (previousAbsOffsetDegree > 345 && absOffsetDegree < 15) {
                numberRotationsCounter++
            }
            if (previousAbsOffsetDegree < 15 && absOffsetDegree > 345) {
                numberRotationsCounter--
            }
            //Goal: Record previous state so we know when to increment numberRotationCounter.
            previousAbsOffsetDegree = absOffsetDegree
            //final degree = number of rotations plus (absoluteDegree minus startingdegree)
            infiniteDegrees = numberRotationsCounter * 360 + absOffsetDegree
            //update CSS to rotate wheel
            this.inputUpdate(infiniteDegrees)
            //update drink name based on wheel's infinitedegree angle
            this.wheelSelectorByDegree(infiniteDegrees).then( function(result){
                document.getElementById("drinkname").innerText = result.name
                document.getElementById("drinkname").style.color = result.color
            })


        }
        //Dev Debugging Tools
        //document.getElementById("yco").innerText = y
        //document.getElementById("xco").innerText = x
        //document.getElementById("test1").innerText = absOffsetDegree
        //document.getElementById("test2").innerText = infiniteDegrees
        //document.getElementById("test3").innerText = startingDegree


    }
    //This function returns the alcohol name and color based on wheel degrees
    wheelSelectorByDegree(degrees) {
        return new Promise(function(resolve, reject){
            let selectDegrees

            if (degrees<=-30){
                //for negative numbers
                //30 degree offset to center each wheel slice
                selectDegrees = 360+(degrees%360)+30
            } else {
                selectDegrees = (degrees % 360) + 30
            }
            switch(Math.floor(selectDegrees/60)){
                case 0: alcoholObject = alcoholList[1]
                    break
                case 1: alcoholObject = alcoholList[2]
                    break
                case 2: alcoholObject = alcoholList[3]
                    break
                case 3: alcoholObject = alcoholList[4]
                    break
                case 4: alcoholObject = alcoholList[5]
                    break
                case 5: alcoholObject = alcoholList[6]
                    break
                default: alcoholObject = alcoholList[1]

            }
            resolve(alcoholObject)
        })


    }

    //Routing to the next page for form submit
    routeWithNewBaseAlcohol (e) {
        e.preventDefault()
        this.props.updateBaseAlcohol(alcoholObject.type)
        this.props.history.push(`/customize`)


    }

    //Attaches event handlers to DOM
    componentDidMount(){
        document.getElementById("wheel").addEventListener("mousemove", this.mouseToSpinWheel)
        document.getElementById("wheel").addEventListener("mousedown", this.setDownTrue)
        document.getElementById("wheel").addEventListener("mouseup", this.setDownFalse)
        document.getElementById("search").addEventListener("click", this.routeWithNewBaseAlcohol)
        document.getElementById("wheel").addEventListener("touchmove", this.touchToSpinWheel, false)
        document.getElementById("wheel").addEventListener("touchstart", (ev)=>{ev.preventDefault(); this.setDownTrue(ev)}, false)
        document.getElementById("wheel").addEventListener("touchend", (ev)=>{ev.preventDefault(); this.setDownFalse(ev)}, false)



    }


    render(){
       return(
           <div className="">
               <div className="drinknamecontainer"><span id="drinkname">Gin</span></div>
               <div className="carrot"><i className="fa fa-angle-double-down" aria-hidden="true"> </i></div>
               <div className="wheelcontainer">
                   <div id="wheel" className="wheel">
                       <div id="wheeltext">
                           <h1>
                               <span className="char1"> </span>
                               <span className="char2"> </span>
                               <span className="char3"> </span>
                               <span className="char4"> </span>
                               <span className="char5">V</span>
                               <span className="char6"> </span>
                               <span className="char7"> </span>
                               <span className="char8"> </span>
                               <span className="char9"> </span>
                               <span className="char10">T</span>
                               <span className="char11"> </span>
                               <span className="char12"> </span>
                               <span className="char13"> </span>
                               <span className="char14"> </span>
                               <span className="char15">B</span>
                               <span className="char16"> </span>
                               <span className="char17"> </span>
                               <span className="char18"> </span>
                               <span className="char19"> </span>
                               <span className="char20">W</span>
                               <span className="char21"> </span>
                               <span className="char22"> </span>
                               <span className="char23"> </span>
                               <span className="char24"> </span>
                               <span className="char25">R</span>
                               <span className="char26"> </span>
                               <span className="char27"> </span>
                               <span className="char28"> </span>
                               <span className="char29"> </span>
                               <span className="char30">G</span>
                           </h1>
                       </div>
                   </div>
               </div>
               <div className="search">
                        <span id="search">
                            <i className="fa fa-search"> </i>
                        </span>
               </div>
               
               {/*Dev Debugging Tools

                <div className="text1" id="test">fdfdfdfds</div>
               <div className="text1" >x-coordinates: <span id="xco"> </span></div>
               <div className="text1" >y-coordinates: <span id="yco"> </span></div>
               <div className="text1" >Degrees: <span id="test1"> </span></div>
               <div className="text1" >Starting Degree: <span id="test3"> </span></div>
               <div className="text1" >Infinite Degree: <span id="test2"> </span></div>
               <div className="text1" >Infinite Degree: <span id="test2"> </span></div>*/}
       </div>
       )
   }
    
}



export default withRouter(WheelSelector)