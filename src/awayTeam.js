import React from "react";
import "./App.css";

function Test(props) {

    return (
        <div>
            <button onClick={() => {props.setCountTwo(props.countTwo + 7)}} className="homeButtons__fieldGoal">Away Touchdown</button>
            <button onClick={() => {props.setCountTwo(props.countTwo + 3)}} className="homeButtons__fieldGoal">Away Field Goal</button>
        </div>
    )
}

export default Test;

