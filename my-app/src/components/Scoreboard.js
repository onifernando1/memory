import React from "react";

function Scoreboard(props) {
  return (
    <div>
      <div> Score:{props.score}</div>
      <div>Highscore: {props.highScore}</div>
    </div>
  );
}

export default Scoreboard;
