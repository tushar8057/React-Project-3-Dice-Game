import React from "react";

import "../styled/RoleDice.css";

const RoleDice = ({ roleDice, currDice }) => {
  return (
    <div className="diceContainer">
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currDice}.png`} alt="dice_1" />
      </div>
      <p>Click on Dice to roll</p>
      
    </div>
  );
};

export default RoleDice;
