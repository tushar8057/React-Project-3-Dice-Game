import React from "react";
import "../styled/TotalScore.css";

const TotalScore = ({score}) => {
  return (
    <div className="scoreContainer">
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
};

export default TotalScore;


