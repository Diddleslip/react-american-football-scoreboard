import React from "react";
import "./App.css";

function FunctionClick(props) {

    console.log(props);
    return (
        
        <div>
            <button onClick = {() => {props.setCountOne(props.countOne + 7)}} className="homeButtons__fieldGoal">Home Touchdown</button>
            <button onClick= {() => {props.setCountOne(props.countOne + 3)}} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
    )
}

export default FunctionClick