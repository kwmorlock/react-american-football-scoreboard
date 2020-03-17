//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
// import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [meowScore, scoreMeow] = useState(-9200);
const [rawrScore, scoreRawr] = useState(-15);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Meow</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{meowScore}</div>
          </div>
          <div className="timer">11:11</div>
          <div className="away">
            <h2 className="away__name">Rawr</h2>
  <div className="away__score">{rawrScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() =>scoreMeow(meowScore +7)}className="homeButtons__touchdown">Home Cute Points</button>
          <button onClick = {() =>scoreMeow(meowScore +3)}className="homeButtons__fieldGoal">Home Pretty Points</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() =>scoreRawr(rawrScore +7)} className="awayButtons__touchdown">Away Cute Points</button>
          <button onClick = {() =>scoreRawr(rawrScore +3)}className="awayButtons__fieldGoal">Away Pretty Points</button>
        </div>
      </section>
    </div>
  );
}

export default App;
