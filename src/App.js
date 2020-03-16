//TODO: STEP 1 - Import the useState hook.
import React, { useState }from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import FunctionClick from "./homeTeam";
import Test from "./awayTeam";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  let [countOne, setCountOne] = useState(0);
  let [countTwo, setCountTwo] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{countOne}</div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{countTwo}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
        <FunctionClick countOne = {countOne} setCountOne = {setCountOne}/>
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        </div>
        <div className="awayButtons">
          <Test countTwo = {countTwo} setCountTwo = {setCountTwo}/>
        </div>
      </section>
    </div>
  );
}

export default App;
