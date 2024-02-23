import React from "react";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import "../styled/GamePlay.css";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import { Button, OutlineButton } from "../styled/Button";

const GamePlay = () => {
  const [selectNumber, setSelectNumber] = useState();
  const [currDice, setCurrDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const genRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNum = genRandomNum(1, 7);
    setCurrDice((prev) => randomNum);

    if (selectNumber === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <div className="main">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          seterror={setError}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RoleDice currDice={currDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </>
  );
};

export default GamePlay;
